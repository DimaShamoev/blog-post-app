import React from "react";
import Header from "../../components/Header";
import "./Profile.scss";
import Footer from "../../components/Footer";

const Profile: React.FunctionComponent = () => {
    return (
        <div className="profile-page-container">
            <Header />
            <div className="main">
                <div className="container">
                    <div className="main-wrapper">
                        <div className="user-info">
                            <div className="user-pic">pfp</div>
                            <div className="user-name">UserName</div>
                        </div>

                        <div className="user-blogs-list">
                            {/* <div className="user-blog">
                                <p>name</p>
                                <p>cont</p>
                                <p>pic</p>
                            </div> */}

                            List of Users' Blogs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
