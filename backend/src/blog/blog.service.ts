import { Injectable, NotFoundException } from '@nestjs/common';
import { IBlog, IUserBlog } from 'src/BlogDto/blogDto';

@Injectable()
export class BlogService {
    private Blogs: IBlog[] = [];
    private currentID = 1;
    private date = `${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`;
    private likeCnt = 0;

    findAll() {
        return this.Blogs;
    }

    findById(findId: number) {
        return this.Blogs.find((blog) => blog.id === findId);
    }

    createBlog(blogData: IUserBlog, creatorId: string) {
        const newBlog: IBlog = {
            id: this.currentID++,
            date: this.date,
            ...blogData,
        };
        this.Blogs.push(newBlog);
        return newBlog;
    }

    deleteBlog(id: number) {
        const blogToDelete = this.findById(id);
        this.Blogs = this.Blogs.filter((blog) => blog.id !== id);
        return blogToDelete;
    }
}
