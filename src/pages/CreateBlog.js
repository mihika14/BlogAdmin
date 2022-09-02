import React, { useState, useEffect } from "react";
import Axios from 'axios';
import "./style.css";

export default function CreateBlog() {
    const [userName, setUserName] = useState(" ");
    const [title, setTitle] = useState(" ");
    const [text, setText] = useState(" ");

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/create', {
            userName: userName,
            title: title,
            text: text,
        })
    };


    return (
        <div className="ui container">
            <form className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
                <div className="field">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="field">
                    <label>Post Text</label>
                    <textarea
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button className="ui button" onClick={submitPost}>
                        Submit Post
                    </button>
                </div>
            </form>
        </div>

    )
}