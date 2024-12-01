import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { IBlog, IUserBlog } from 'src/BlogDto/blogDto';

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @Get()
    findAll(): IBlog[] {
        return this.blogService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): IBlog {
        return this.blogService.findById(+id);
    }

    @Post()
    createBlog(@Body() blogData: IUserBlog): IBlog {
        return this.blogService.createBlog(blogData);
    }

    @Delete(':id')
    deleteBlog(@Param('id') id: number ): IBlog {
        return this.blogService.deleteBlog(+id);
    }

}
