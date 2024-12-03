import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { IoMenu, IoSearch } from "react-icons/io5";
import useAside from "../Hooks/UseAside";

const Header: React.FunctionComponent = () => {
    const { asideState, setAsideState } = useAside()
    console.log(asideState)

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-left-side">
                        <div className="header-logo">
                            <a href="#">SpaceBlog</a>
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
                            <a href="#">
                                <BsPencilSquare />
                                <span>Write</span>
                            </a>
                        </div>
                        <div className="user-profile">PFP</div>
                        
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
