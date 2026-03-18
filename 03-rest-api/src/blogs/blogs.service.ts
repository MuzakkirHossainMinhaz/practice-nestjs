import { Injectable, NotFoundException } from '@nestjs/common';

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  published: boolean;
  createdAt: Date;
}

@Injectable()
export class BlogsService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'First Blog',
      content: 'This is the content of the first blog.',
      author: 'John Doe',
      published: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Second Blog',
      content: 'This is the content of the second blog.',
      author: 'Jane Smith',
      published: false,
      createdAt: new Date(),
    },
  ];

  findAll(): Blog[] {
    return this.blogs;
  }

  findOne(id: number): Blog {
    const blog = this.blogs.find((blog) => blog.id === id);
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return blog;
  }

  create(blog: Omit<Blog, 'id' | 'createdAt'>): Blog {
    const newBlog: Blog = {
      id: this.blogs.length + 1,
      createdAt: new Date(),
      ...blog,
    };
    this.blogs.push(newBlog);
    return newBlog;
  }

  update(
    id: number,
    updatedBlog: Partial<Omit<Blog, 'id' | 'createdAt'>>,
  ): Blog {
    const blog = this.findOne(id);

    if (!blog) {
      throw new NotFoundException('Blog not found');
    }

    Object.assign(blog, updatedBlog);
    return blog;
  }

  delete(id: number): boolean {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
      return true;
    }
    throw new NotFoundException('Blog not found');
  }
}
