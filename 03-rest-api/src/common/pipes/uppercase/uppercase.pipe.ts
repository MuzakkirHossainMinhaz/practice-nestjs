import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }

    // If it's an object (like DTO), convert author field to uppercase
    if (typeof value === 'object' && value !== null && value.author) {
      return {
        ...value,
        author: value.author.toUpperCase(),
      };
    }

    return value;
  }
}
