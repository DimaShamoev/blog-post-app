import React from "react";
import Header from "../../components/Header";
import "./Profile.scss";
import { UserButton, useUser } from "@clerk/clerk-react";

const Profile: React.FunctionComponent = () => {
    const { user } = useUser()

    return (
        <div className="profile-page-container">
            <Header />
            <div className="main">
                <div className="container">
                    <div className="main-block-wrapper">
                        <div className="user-info">
                            <div className="user-pic">
                                <UserButton />
                            </div>
                            <div className="user-name">{user?.username}</div>
                        </div>

                        <div className="user-blogs-list">
                            <div className="user-blog">
                                <p>name</p>
                                <p>cont</p>
                                <p>pic</p>
                            </div>

                            List of Users' Blogs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
