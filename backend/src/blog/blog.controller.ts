import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { IUserBlog } from 'src/BlogDto/blogDto';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get()
    findAll() {
        return this.blogService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.blogService.findById(Number(id));
    }

    @Post()
    createBlog(@Body() body: IUserBlog) {
        return this.blogService.createBlog(body, body['creatorId']);
    }

    @Delete(':id')
    deleteBlog(@Param('id') id: number) {
        return this.blogService.deleteBlog(id);
    }
}
