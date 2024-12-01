import React from "react";

const BlogPostForm: React.FunctionComponent = () => {
    return (
        <div className="blog-post-form">
            <div className="container">
                <div className="form-wrapper">
                    <form>
                        <div className="input-block">
                            <span>Author Name</span>
                            <input
                                className="blog-input"
                                type="text"
                                name="user"
                                placeholder="Enter Blog Author"
                            />
                        </div>

                        <div className="input-block">
                            <span>Blog Title</span>
                            <input
                                className="blog-input"
                                type="text"
                                name="title"
                                placeholder="Enter Blog Title"
                            />
                        </div>

                        <div className="input-block">
                            <span>Blog content</span>
                            <textarea
                                className="blog-input"
                                name="content"
                                placeholder="Enter Blog Content"
                            />
                        </div>

                        <div className="submit-btn">
                            <button type="submit">Post Blog</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogPostForm;
