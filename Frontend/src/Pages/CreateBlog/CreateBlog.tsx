import React from "react";
import { useForm } from "react-hook-form";
import "./CreateBlog.scss";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
// import { useSelector } from "react-redux";
// import { RootState } from "../../Store/Store";

const CreateBlog: React.FunctionComponent = () => {
    // const likesCnt = useSelector((state: RootState) => state.blogLike.cnt)

    const { user } = useUser();
    const navigate = useNavigate();

    interface IFormData {
        title: string;
        content: string;
        blogType: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>();

    const onSubmit = async (data: IFormData) => {
        try {
            const response = await axios.post("http://localhost:3000/blog", {
                title: data.title,
                content: data.content,
                blogType: data.blogType,
                creatorId: user?.id,
                creatorName: user?.username,
                userImgUrl: user?.imageUrl

            });

            console.log("Blog created:", response.data);
            navigate("/profile");
        } catch (error) {
            alert(`Error creating blog: ${error}`);
        }
    };

    return (
        <div className="blog-container">
            <header className="header-block">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/">SpaceBlog</Link>
                        </div>

                        <div className="profile-pic">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        label="Profile"
                                        labelIcon={<FaUser />}
                                        onClick={() => navigate("/profile")}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                            <span>{user?.username}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <div className="main-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="publish-btn">
                                <button type="submit">Publish</button>
                            </div>

                            <div className="input-block">
                                <div className="select-wrapper">
                                    <select
                                        {...register("blogType", {
                                            required: "This Field Required",
                                        })}
                                    >
                                        <option value="">Select Blog</option>
                                        <option value="trending">
                                            Trending
                                        </option>
                                        <option value="society">Society</option>
                                        <option value="lifestyle">
                                            LifeStyle
                                        </option>
                                        <option value="work">Work</option>
                                        <option value="education">
                                            Education
                                        </option>
                                    </select>
                                </div>
                                {errors.blogType && (
                                    <span className="error-message">
                                        {errors.blogType.message}
                                    </span>
                                )}
                            </div>

                            <div className="input-block">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    {...register("title", {
                                        required: "This Field Required",
                                    })}
                                />
                                {errors.title && (
                                    <span className="error-message">
                                        {errors.title.message}
                                    </span>
                                )}
                            </div>

                            <div className="input-block">
                                <textarea
                                    placeholder="Tell Your Story..."
                                    {...register("content", {
                                        required: "This Field Required",
                                    })}
                                />
                                {errors.content && (
                                    <span className="error-message">
                                        {errors.content.message}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateBlog;
