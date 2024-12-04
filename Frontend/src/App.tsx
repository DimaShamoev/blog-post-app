import React from "react";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";
// import Home from "./Pages/Home/Home";
// import Header from "./components/Header";
// import MainPage from "./Pages/MainPage/MainPage";
// import BlogPostForm from "./components/BlogPostForm";
// import BlogsList from "./components/BlogsList";

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            {/* 
                // Test
                <BlogPostForm />
                <BlogsList />
            */}

            {/* If User isn't Authorized */}
            {/* <MainPage /> */}
           

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

            {/* 
                Authorized Main Page
                <Header />
                <Home />
            */}

            {/* 
                Blog Writing Page
            */}
            <CreateBlog />
            
        </div>
    );
};

export default App;
