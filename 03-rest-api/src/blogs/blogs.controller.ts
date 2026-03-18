import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBlogDto, UpdateBlogDto } from './blogs.dto';
import { type Blog } from './blogs.interface';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  getAllBlogs(): Blog[] {
    return this.blogsService.findAll();
  }

  @Get(':id')
  getBlogById(@Param('id') id: string): Blog {
    return this.blogsService.findOne(Number(id));
  }

  @Post()
  createBlog(@Body() blog: CreateBlogDto): Blog {
    return this.blogsService.create(blog);
  }

  /**
   * Difference between PUT and PATCH:
   * - PUT: Replaces the entire resource. If any fields are missing in the request body, they will be set to null or default values.
   * - PATCH: Partially updates the resource. Only the fields provided in the request body will be updated, and the rest will remain unchanged.
   */

  @Patch(':id')
  updateBlog(
    @Param('id') id: string,
    @Body() updatedBlog: UpdateBlogDto,
  ): Blog {
    return this.blogsService.update(Number(id), updatedBlog);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: string): any {
    this.blogsService.delete(Number(id));
    return {
      success: true,
      message: 'Blog deleted successfully',
    };
  }
}
