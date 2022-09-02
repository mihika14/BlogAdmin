import React from 'react';
import MainPage from './pages/MainPage';
import CreateBlog from './pages/CreateBlog';
import Navbar from './Navbar';
import './pages/style.css';
import ManageBlogs from './pages/ManageBlogs';

export default function App() {
    let Component
    switch (window.location.pathname)
    {
        case "/":
            Component = <MainPage />;
            break
        case "/CreateBlog":
            Component = <CreateBlog />;
            break
        case "/ManageBlogs":
            Component = <ManageBlogs />;
            break
    }

    return (
        <>
        <Navbar />
        { Component }

        </>
        
    )
}