import React from 'react';
import ManageBlog from './ManageBlogs';
export default function MainPage() {
    return (
        <div className="ui center aligned container">
            <h1 className='name'>
                BLOGS
            </h1>

            <div className='tagline'>
                "The less boring side of personal development"
            </div>
            < br />
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">Elliot Fu</div>
                        <div className="description">
                            Top Writer 2022.
                            7k followers
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Follow
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="header">Veronika Ossi</div>
                        <div className="description">
                            Top Writer 2021
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Follow
                    </div>
                </div>
            </div>

        </div>


    )

}

