import React from "react";

const ManageBlog = () => {
    return (
        <div className="ui center aligned container">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First post</td>
                            <td>Jack</td>
                            <td className="selectable">
                                <a href="#">Edit/Delete/Publish</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Second Post</td>
                            <td>James</td>
                            <td className="selectable">
                                <a href="#">Edit/Delete/Publish</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )}

export default ManageBlog;