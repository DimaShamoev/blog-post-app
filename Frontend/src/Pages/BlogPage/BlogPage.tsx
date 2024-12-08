import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IBlog } from "../../BlogDto/BlogDto";
import Header from "../../components/Header";
import "./BlogPage.scss"

const BlogPage: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = React.useState<IBlog | null>(null);

    React.useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`https://spaceblog-a6he.onrender.com/blog/${id}`);
                setBlog(res.data);
            } catch (err) {
                alert("Failed to fetch blog.");
            }
        };

        fetchBlog();
    }, [id]);

    return (
        <div className="blog-page-wrapper">
            <Header />
            <div className="container">
                <div className="blog-page-block">
                    <div className="blog-title">
                        {blog?.title}
                    </div>
                    <div className="blog-content">
                        {blog?.content}
                    </div>
                    <div className="blog-info">
                        <div className="blog-creator">
                            <p>Created By: {blog?.creatorName}</p>
                        </div>
                        <div className="blog-upload-date">
                            <p>Uploaded: {blog?.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
