import React from "react";
import { MdMenu } from "react-icons/md";

const Header: React.FunctionComponent = () => {
    return (
        <header className="no-auth-header">
            <div className="small-container">
                <div className="no-auth-header-wrapper">
                    <div className="logo-block">
                        <a href="#">SPACEBLOG</a>
                    </div>
                    <div className="navigation-block">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Write</a>
                                </li>
                                <li>
                                    <a href="#">Sign In</a>
                                </li>
                                <li className="no-auth-header-start-btn">
                                    <a href="#">Get Started</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu-btn">
                        <MdMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
