import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { PostPage } from './pages/PostPage';
import { AddPost } from './pages/AddPost';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { EditPost } from './pages/EditPost';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="posts" element={<PostsPage />} />
                <Route path=":id" element={<PostPage />} />
                <Route path=":id/edit" element={<EditPost />} />
                <Route path="new" element={<AddPost />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
            <ToastContainer position="bottom-right" />
        </Layout>
    );
}

export default App;
