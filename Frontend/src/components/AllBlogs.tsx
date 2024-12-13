import axios from "axios";
import React from "react";
import { IBlog } from "../BlogDto/BlogDto";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { HiDotsHorizontal } from "react-icons/hi";

const AllBlogs: React.FunctionComponent = () => {
    const [blogs, setBlogs] = React.useState<IBlog[]>([]);
    const { user } = useUser()
    const [clickedParam, setClickedParam] = React.useState<number | null>(null)

    React.useEffect(() => {
        const fetching = async () => {
            try {
                const res = await axios.get("http://localhost:3000/blog");
                setBlogs(res.data);
            } catch (err) {
                alert(`Can't Fetch: ${err}`);
            }
        };

        fetching();
    }, []);

    const handleDelete = async (blogId: number) => {
        try {
            await axios.delete(`http://localhost:3000/blog/${blogId}`);
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
        } catch (err) {
            console.error("Error deleting blog:", err);
        }
    };

    const isOwner = (creatorId: string) => user?.id === creatorId;

    const toggleParamClick = (blogId: number) => {
        setClickedParam((prev) => (prev === blogId ? null : blogId));
    };

    return (
        <div className="content-block">
            {blogs.map((blog) => (
                <div className="blog-block" key={blog.id}>
                    <div className="blog-main-info">
                        <div className="blog-about-info">
                            <div className="blog-title">
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </div>
                            <div className="blog-about">About: {blog.blogType}</div>
                        </div>

                        { isOwner(blog.creatorId) ? 
                            <div className="params-block">
                                <span onClick={() => toggleParamClick(blog.id)} className="blog-params"><HiDotsHorizontal /></span>
                                <div className={`params-list ${clickedParam === blog.id ? "active" : ""}`}>
                                    <ul>
                                        <li onClick={() => handleDelete(blog.id)}>Delete</li>
                                    </ul>
                                </div>
                            </div> : 
                        '' }
                    </div>
                    <div className="blog-content">
                        {blog.content.split(" ").slice(0, 10).join(" ")}...
                    </div>
                    <div className="blog-info">
                        <div className="blog-upload-time">
                            Uploaded: {blog.date}
                        </div>
                        <div className="creator-name">
                            <div className="blog-creator">
                                <div className="blog-creator-img">
                                    <img src={blog.userImgUrl} alt="" />
                                </div>
                                {blog.creatorName}
                            </div>
                        </div>
                    </div>
                    <div className="blog-number">{blog.id}</div>
                </div>
            ))}
        </div>
    );
};

export default AllBlogs;
