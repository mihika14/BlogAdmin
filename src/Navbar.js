import React from "react";
import MainPage from "./pages/MainPage";
import CreateBlog from "./pages/CreateBlog";

const Navbar = () => {
    return(
        <div className="ui horizontal menu">
            <a href = "/" className="black item ">
                Home
            </a>
            <a href ="/CreateBlog" className="black item">
                Create Post
            </a>
            <a href ="/ManageBlogs" className="black item">
               Manage Blogs
            </a>
            <div className="ui right aligned menu">
            <i className="huge user circle icon"></i>
            </div>
            
        </div>

    )

}

export default Navbar;