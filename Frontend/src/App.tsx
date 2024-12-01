import React from "react";
import BlogPostForm from "./components/BlogPostForm";
import BlogsList from "./components/BlogsList";

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <BlogPostForm />
            <BlogsList />
        </div>
    );
};

export default App;
