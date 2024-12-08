import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAside from "../Hooks/UseAside";


const AsideMenu: React.FunctionComponent = () => {
    const { asideState, setAsideState } = useAside()

    return (
        <aside className={`aside-menu ${asideState ? 'active' : ""}`}>
            <div className="aside-overlay"></div>
            <div className="aside-wrapper">
                <div  onClick={setAsideState} className="exit-btn">
                    <IoClose />
                </div>
                <div className="aside-menu-list">
                    <ul>
                        <li>
                            <NavLink to="/">
                                <span>
                                    <AiFillHome />
                                </span>{" "}
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/createBlog">
                                <span>
                                    <BsPencilSquare />
                                </span>{" "}
                                Write
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">
                                <span>
                                    <FaUser />
                                </span>{" "}
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default AsideMenu;
