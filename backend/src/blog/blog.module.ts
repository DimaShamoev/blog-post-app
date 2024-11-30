import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { Blog } from './blog';

@Module({
  controllers: [BlogController],
  providers: [BlogService, Blog]
})
export class BlogModule {}
