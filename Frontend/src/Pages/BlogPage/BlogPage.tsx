import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IBlog } from "../../BlogDto/BlogDto";
import Header from "../../components/Header";
import "./BlogPage.scss"
import { useUser } from "@clerk/clerk-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store"
import { toggleLike, likeIncrement, likeDecrement } from "../../Store/Slices/BlogLikeSlice";
import { Dispatch } from "@reduxjs/toolkit";

const BlogPage: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const { user } = useUser()
    const [blog, setBlog] = React.useState<IBlog | null>(null);
    const [like, setLike] = React.useState<boolean>(false);

    const value = useSelector((state: RootState) => state.blogLike.isLiked)
    const cnt = useSelector((state: RootState) => state.blogLike.cnt)
    const dispatch = useDispatch<Dispatch>()
    const handleLike = () => dispatch(toggleLike())
    const handleLikeCnt = () => dispatch(likeIncrement())
    const handleLikeCntDec = () => dispatch(likeDecrement())

    const likess = () => {
        handleLike();

        if(!value) {
            handleLikeCnt()
        } else {
            handleLikeCntDec()
        }
    }

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

    // const handleLikes = () => {
    //     setLike(prev => !prev)
    // }

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
                        <div onClick={likess} className="reacts">
                            {cnt}:{value ? <span><FaHeart /></span> : <span><FaRegHeart /></span>}
                        </div>
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
