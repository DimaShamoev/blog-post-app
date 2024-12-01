import React from "react";

const BlogPostForm: React.FunctionComponent = () => {
    return (
        <div className="blog-post-form">
            <div className="input-block">
                <span>Author Name</span>
                <input type="text" placeholder="Enter Blog Title" />
            </div>

            <div className="input-block">
                <span>Blog Title</span>
                <input type="text" placeholder="Enter Blog Title" />
            </div>

            <div className="input-block">
                <span>Blog content</span>
                <textarea placeholder="Enter Blog Content" />
            </div>

            <div className="submit-btn">
                <button type="submit">
                    Post Blog
                </button>
            </div>
            

        </div>
    );
};

export default BlogPostForm;
