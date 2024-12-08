import axios from "axios";
import React from "react";
import { IBlog } from "../BlogDto/BlogDto";
import { Link } from "react-router-dom";

const AllBlogs: React.FunctionComponent = () => {
    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        const fetching = async () => {
            try {
                const res = await axios.get("https://spaceblog-a6he.onrender.com/blog");
                setBlogs(res.data);
            } catch(err) {
                alert(`Can't Fetch: ${err}`)
            }

        };

        fetching();
    }, []);

    return (
        <div className="content-block">
            {blogs.map((blog) => (
                <div className="blog-block" key={blog.id}>

                    <div className="blog-main-info">
                        <div className="blog-title">
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                        </div>
                        <div className="blog-about">About: {blog.blogType}</div>
                    </div>
                    <div className="blog-content">
                        {blog.content.split(" ").slice(0, 10).join(" ")}...
                    </div>
                    <div className="blog-info">
                        <div className="creator-name">Created By: {blog.creatorName}</div>
                        <div className="blog-upload-time">Uploaded: {blog.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllBlogs;
