import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { IoMenu, IoSearch } from "react-icons/io5";
import useAside from "../Hooks/UseAside";
import { UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header: React.FunctionComponent = () => {
    const { setAsideState } = useAside();

    const navigate = useNavigate() 

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-left-side">
                        <div className="header-logo">
                            <Link to="/">SpaceBlog</Link>
                        </div>
                        <div className="header-search">
                            <span>
                                <IoSearch />
                            </span>
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="header-right-side">
                        <div className="write-btn">
                            <Link to="/createBlog">
                                <BsPencilSquare />
                                <span>Write</span>
                            </Link>
                        </div>
                        <div className="user-profile">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        label="Profile"
                                        labelIcon={<FaUser />}
                                        onClick={() => navigate('/profile')}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>

                        <div className="menu-btn" onClick={setAsideState}>
                            <IoMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
