import React from "react";
import "./Home.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home: React.FunctionComponent = () => {
    return (
        <main className="home-main">
            <Header />
            <div className="small-container">
                <div className="main-banner-block">
                    <div className="main-banner-text">
                        <div className="banner-first-text">
                            Write Your Story, Inspire the World
                        </div>
                        <div className="banner-secondary-text">
                            Where Ideas Take Flight and Words Connect
                        </div>
                    </div>

                    <div className="main-banner-img">
                        <img src="/img/home-banner-img.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Home;
