import React from "react";
import Header from "../../components/Header";
import "./Profile.scss";
import { UserButton, useUser } from "@clerk/clerk-react";
import { IBlog } from "../../BlogDto/BlogDto";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile: React.FunctionComponent = () => {
    const [userBlogs, setUserBlogs] = React.useState<IBlog[]>([]);
    const { user } = useUser();

    React.useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:3000/blog");
                setUserBlogs(res.data);
            } catch (err) {
                alert(`Can't Fetch Data: ${err}`);
            }
        };
        fetchBlogs();
    }, []);

    const blogs = React.useMemo(
        () => userBlogs.filter((blog) => blog.creatorId === user?.id),
        [userBlogs, user]
    );

    return (
        <div className="profile-page-container">
            <Header />
            <div className="main">
                <div className="container">
                    <div className="main-block-wrapper">
                        <div className="user-info">
                            <div className="user-pic-name">
                                <UserButton />
                                <span>{user?.username}</span>
                            </div>
                        </div>

                        <div className="my-blogs-block">
                            My Blogs
                        </div>

                        <div className="user-blogs-list">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="blog-block">
                                    <div className="blog-title">
                                        <Link to={`/blog/${blog.id}`} >{blog.title}</Link>
                                    </div>
                                    <div className="blog-content">
                                        {blog.content.split(" ").slice(0, 10).join(" ")}...
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
