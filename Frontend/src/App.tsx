import React from "react";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Header from "./components/Header";
import SignIn from "./Pages/SignIn/SignIn";
import MainPage from "./Pages/MainPage/MainPage";
import SignUp from "./Pages/SignUp/SignUp";
import PasswordRecovery from "./Pages/PasswordRecovery/PasswordRecovery";
import Footer from "./components/Footer";
import BlogPostForm from "./components/BlogPostForm";
import BlogsList from "./components/BlogsList";
import { SignInButton, SignedIn, SignedOut, UserProfile } from "@clerk/clerk-react";
import Contents from "./components/Contents";

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            {/* 
                // Test
                <BlogPostForm />
                <BlogsList />
            */}

            {/* If User isn't Authorized */}
            <SignedOut>
                <MainPage />
            </SignedOut>
            <SignedIn>
                {/* <Home/> */}
                {/* <Profile /> */}
                {/* <CreateBlog /> */}
                <Contents />
            </SignedIn>

            {/* if user Authorized */}
            {/* 
                To Do:
                - routing:
                    - Home <-> search <-> write <-> profile
                - fetching:
                    - get and post Data;
                - Authorization:
                    -custom, not clerk
            
            */}

            {/* Authorized Main Page */}
            {/* <Header /> */}
            {/* <Home />  */}

            {/* Blog Writing Page */}
            {/* <CreateBlog /> */}

            {/* Authorized User Profile */}
            {/* <Profile /> */}

            {/* Forms */}
            {/* <SignIn /> */}
            {/* <SignUp /> */}
            {/* <PasswordRecovery /> */}

            
        </div>
    );
};

export default App;


// TO DOs
// 1. Aside Menu
// 2. Routing
// 3. DB
// 4. Authorization

