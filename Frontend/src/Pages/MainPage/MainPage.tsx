import React from "react";
import "./MainPage.scss";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaPenAlt, FaRunning, FaUser } from "react-icons/fa";
import { SignUp } from "@clerk/clerk-react";

const MainPage: React.FunctionComponent = () => {

    const [openAside, setOpenAside] = React.useState<boolean>(false);
    const [Modal, setModal] = React.useState<boolean>(false);

    const handleAsideOpen = (): void => {
        setOpenAside(true);
    }

    const handleAsideClose = (): void => {
        setOpenAside(false)
    }

    const handleOpenModal = (): void => {
        setModal(true)
    }
    const handleCloseModal = (): void => {
        setModal(false)
    }

    return (
        <div className="home-container">
            <div className={`sign-up-modal ${Modal ? 'active' : ''}`}>
                        <div onClick={handleCloseModal} className="overlay"></div>
                        <div className="modal-wrapper">
                            <SignUp />
                        </div>
                    </div>
            <div className="container">
                <div className="home-container-wrapper">
                    <header className="header">
                        <div className="header-logo">
                            <a href="#">SpaceBlog</a>
                        </div>
                        <div className="header-navigation">
                            <nav>
                                <ul>
                                    <li onClick={handleOpenModal}><a href="#">Write</a></li>
                                    <li onClick={handleOpenModal}><a href="#">Sign In</a></li>
                                    <li onClick={handleOpenModal} className="header-start-btn"><a href="#">Get Started</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='menu-btn' onClick={handleAsideOpen}>
                            <IoMenu />
                        </div>
                    </header>

                    <main className="main">
                        <div className="text-block">
                            <div className="text-tile">
                                Write Your Story, Inspire the World
                            </div>
                            <div className="secondary-text">
                                Where Ideas Take Flight and Words Connect
                            </div>
                        </div>
                        <div className="start-writing-btn">
                            <a onClick={handleOpenModal} href="#">
                                Start Writing
                            </a>
                        </div>
                        <div className="img-block">
                            <img src="img/home-banner-img.png" alt="" />
                        </div>
                    </main>

                    <footer className="footer">
                        ©2024 SpaceBlog
                    </footer>
                    
                    <div className={`aside-menu-block ${openAside ? 'active' : ''}`}>
                        <div
                            className="exit-btn-block"
                            onClick={handleAsideClose}
                        >
                            <IoClose />
                        </div>
                        <div className={`page-lists-block`}>
                            <ul>
                                <li onClick={handleOpenModal}><a href="#"><span><FaPenAlt /></span> Write</a></li>
                                <li onClick={handleOpenModal}><a href="#"><span><FaUser /></span> Sign In</a></li>
                                <li onClick={handleOpenModal}><a href="#"><span><FaRunning /></span> Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
