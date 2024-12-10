import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IBlog } from "../../BlogDto/BlogDto";
import Header from "../../components/Header";
import "./BlogPage.scss"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store"

const BlogPage: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = React.useState<IBlog | null>(null);

    const value = useSelector((state: RootState) => state.blogLike.isLiked)
    const cnt = useSelector((state: RootState) => state.blogLike.cnt)

    React.useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/blog/${id}`);
                setBlog(res.data);
            } catch (err) {
                alert("Failed to fetch blog.");
            }
        };

        fetchBlog();
    }, [id]);

    console.log(value)

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
                        <div className="reacts">
                            {cnt}:{value ? <span><FaHeart /></span> : <span><FaRegHeart /></span>}
                        </div>
                        <div className="blog-creator">
                            <p>Created By: </p>
                            <div className="blog-creator-info">
                                <div className="image-wrapper">
                                    <img src={blog?.userImgUrl} alt="" />
                                </div>
                                <p>{blog?.creatorName}</p>
                            </div>
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
