import React from "react";
import { IBlog } from "../BlogDto/BlogDto";
import axios from "axios";

const BlogsList: React.FunctionComponent = () => {
    
    const [blog, setBlog] = React.useState<IBlog[]>([])
    

    return (
        <div className="blogs-list">
            <div className="container">
                <div className="blog-list-wrapper"></div>
            </div>
        </div>
    );
};

export default BlogsList;
