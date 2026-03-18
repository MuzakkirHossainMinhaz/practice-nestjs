import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products: any[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'A high-performance laptop for work and gaming.',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 499.99,
      description: 'A sleek smartphone with a powerful camera.',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones for immersive sound.',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 299.99,
      description: 'A stylish smartwatch with fitness tracking features.',
    },
    {
      id: 5,
      name: 'Tablet',
      price: 399.99,
      description: 'A versatile tablet for work and entertainment.',
    },
  ];

  /*
   * This method returns the list of all products.
   * It can be used to retrieve all product data for display or processing.
   * @returns An array of product objects.
   */
  getProducts() {
    return this.products;
  }

  /*
   * This method retrieves a product by its unique identifier (ID).
   * It searches through the list of products and returns the product object that matches the provided ID.
   * @param id - The unique identifier of the product to retrieve.
   * @returns The product object that matches the provided ID, or undefined if no product is found.
   */
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
