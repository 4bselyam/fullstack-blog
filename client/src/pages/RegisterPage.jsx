import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { registerUser } from '../redux/features/auth/authSlice';

export const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status) toast(status);
    }, [status]);

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ username, password }));
            setPassword('');
            setUsername('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={e => e.preventDefault()} className="w-1/4 h-60 mx-auto mt-40">
            <h1 className="text-lg text-white text-center">Registration</h1>
            <label className="text-xs text-gray-400">
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    className="mt-1 text-black rounded-lg w-full bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
                />
            </label>
            <label className="text-xs text-gray-400">
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mt-1 text-black rounded-lg w-full bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
                />
            </label>

            <div className="flex gap-8 justify-center mt-4">
                <button
                    className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
                    type="submit"
                    onClick={handleSubmit}>
                    Sign Up
                </button>
                <Link
                    to="/login"
                    className="flex justify-center items-center text-xs text-gray-400 hover:text-white">
                    Have an account?
                </Link>
            </div>
        </form>
    );
};
