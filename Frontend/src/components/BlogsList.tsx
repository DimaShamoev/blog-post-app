import React from "react";
import { IBlog } from "../BlogDto/BlogDto";
import axios from "axios";

const BlogsList: React.FunctionComponent = () => {
    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get<IBlog[]>(
                    "http://localhost:3000/blog"
                );
                setBlogs(response.data);
            } catch (err) {
                alert(`Can't Display Blog: ${err}`);
            }
        };

        fetching();
    }, [blogs]);

    return (
        <div className="blogs-list-container">
            <div className="container">
                <div className="blog-list-wrapper">
                    <div className="blog-list-box">
                        <h2>BLOGS</h2>

                        <div className="blogs-list">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="blog-block">
                                    <div className="blog-title">
                                        {blog.title}
                                    </div>
                                    <div className="block-content">
                                        {blog.content}
                                    </div>
                                    <div className="blog-author">
                                        Author: {blog.author}
                                    </div>
                                    <div className="blog-date">
                                        Uploaded{blog.date}
                                    </div>
                                    <div className="blog-number">{blog.id}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;
