import { Injectable } from '@nestjs/common';
import { IBlog, IUserBlog } from 'src/BlogDto/blogDto';

@Injectable()
export class BlogService {

    private Blogs: IBlog[] = [];
    private currentID = 1;

    findAll(): IBlog[] {
        return this.Blogs;
    }

    findById(id: number): IBlog | undefined {
        return this.Blogs.find((blog) => blog.id === id);
    }

    createBlog(blogData: IUserBlog): IBlog {
        const newBlog: IBlog = {
            id: this.currentID++,
            date: `${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`, 
            ...blogData
        }

        this.Blogs.push(newBlog);

        return newBlog;
    }

    deleteBlog(id: number): IBlog {
        const blogToDelete = this.findById(id);

        this.Blogs = this.Blogs.filter((blog) => blog.id !== id);

        return blogToDelete;
    }

}
