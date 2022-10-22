import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
    return (
        <>
            <div className="cotainer mx-auto">
                <Navbar />
                {children}
            </div>
        </>
    );
};
