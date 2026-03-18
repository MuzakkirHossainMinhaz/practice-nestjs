import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsString()
  author: string;
  @IsBoolean()
  published: boolean;
}

export class UpdateBlogDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  content?: string;
  @IsOptional()
  @IsString()
  author?: string;
  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
