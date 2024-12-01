import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsDto } from "../BlogDto/InputsDto";

const BlogPostForm: React.FunctionComponent = () => {

    const { register, handleSubmit, reset, formState: {errors} } = useForm<InputsDto>();

    const onSubmit: SubmitHandler<InputsDto> = async (data) => {
        try {
            await axios.post("http://localhost:3000/blog", data)
            reset()
            alert("Blog Posted Successfully");
        } catch (err) {
            alert(`Can't Post Blog: ${err}`)
        }
    };


    return (
        <div className="blog-post-form">
            <div className="container">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-block">
                            <span>Author Name</span>
                            <input
                                className="blog-input"
                                type="text"
                                placeholder="Enter Blog Author"
                                {...register("author", { required: "This Field Required" })}
                            />
                            {errors.author && <p className="input-error-message">{errors.author.message}</p>}
                        </div>

                        <div className="input-block">
                            <span>Blog Title</span>
                            <input
                                className="blog-input"
                                type="text"
                                placeholder="Enter Blog Title"
                                {...register("title", { required: "This Field Required" })}
                            />
                            {errors.title && <p className="input-error-message">{errors.title.message}</p>}
                        </div>

                        <div className="input-block">
                            <span>Blog content</span>
                            <textarea
                                className="blog-input"
                                placeholder="Enter Blog Content"
                                {...register("content", { required: "This Field Required" })}
                            />
                            {errors.content && <p className="input-error-message">{errors.content.message}</p>}
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
