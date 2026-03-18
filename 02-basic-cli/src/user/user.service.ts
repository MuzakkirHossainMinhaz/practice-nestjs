import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 26,
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 32,
      isActive: false,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
      isActive: true,
    },
  ];

  /*
   * This method returns the list of all users.
   * It can be used to retrieve all user data for display or processing.
   * @returns An array of user objects.
   */
  getUsers() {
    return this.users;
  }

  /*
   * This method retrieves a user by their unique identifier (ID).
   * It searches through the list of users and returns the user object that matches the provided ID.
   * @param id - The unique identifier of the user to retrieve.
   * @returns The user object that matches the provided ID, or undefined if no user is found.
   */
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
