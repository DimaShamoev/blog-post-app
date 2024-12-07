import axios from "axios";
import React from "react";

const AllBlogs: React.FunctionComponent = () => {
    interface IBlog {
        id: 1;
        date: string;
        title: string;
        content: string;
        blogType: string;
        creatorId: string;
        creatorName: string
    }

    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() => {
        const fetching = async () => {
            const res = await axios.get("http://localhost:3000/blog/");
            setBlogs(res.data);
        }

        fetching()
    }, [])

    return (
        <div className="content-block">

            {blogs.map((blog) => (
                <div className="blog-block" key={blog.id}>
                    <p>{blog.id}</p>
                    <p>{blog.blogType}</p>
                    <p>{blog.title}</p>
                    <p>{blog.content}</p>
                    <p>{blog.creatorId}</p>
                    <p>{blog.creatorName}</p>
                </div>
            ))}

        </div>
    );
};

export default AllBlogs;
