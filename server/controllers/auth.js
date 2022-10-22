import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

// Register user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isExisting = await User.findOne({ username });

        if (isExisting) return res.status(402).json({ message: 'This username is in use' });

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
        });

        await newUser.save();

        const responseObj = {
            username: newUser.username,
            posts: newUser.posts,
        };

        return res.status(201).json({ message: 'Registration successfull', ...responseObj });
    } catch (err) {
        res.json({ message: 'Somethin went wrong' });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.json({ message: 'There is not such user' });

        const isPwdCorrect = await bcrypt.compare(password, user.password);
        if (!isPwdCorrect) return res.json({ message: 'Login or password is incorrect' });

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        );

        const responseObj = {
            username: user.username,
            posts: user.posts,
        };

        return res.json({ message: 'Successfully logged in', token, ...responseObj });
    } catch (err) {
        res.json({ message: 'Something went wrong' });
    }
};

// Get Me
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.json({ message: 'There is not such user' });

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        );

        const responseObj = {
            username: user.username,
            posts: user.posts,
        };

        return res.json({ token, ...responseObj });
    } catch (err) {
        res.json({ message: 'Something went wrong' });
    }
};
