import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const isAuth = false;
    const activeStyles = {
        color: 'white',
    };

    return (
        <div className="flex py-4 justify-between items-center">
            <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
                AV
            </span>
            {isAuth && (
                <ul className="flex gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) => (isActive ? activeStyles : null)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/posts"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) => (isActive ? activeStyles : null)}>
                            My Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) => (isActive ? activeStyles : null)}>
                            New Post
                        </NavLink>
                    </li>
                </ul>
            )}
            <div className="flex justify-center items-center bg-gray-400 text-xs text-white rounded-sm px-4 py-2">
                {isAuth ? <button>Sign Out</button> : <Link to="/login">Sign In</Link>}
            </div>
        </div>
    );
};
