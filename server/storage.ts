// Simple in-memory storage for portfolio website
interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
  createContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact>;
}

export class InMemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private users: User[] = [];
  private contactId = 1;
  private userId = 1;

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const user: User = {
      id: this.userId.toString(),
      username: insertUser.username,
      email: insertUser.email,
      passwordHash: insertUser.passwordHash,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.push(user);
    this.userId++;
    return user;
  }

  async createContact(insertContact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
    const contact: Contact = {
      id: this.contactId.toString(),
      name: insertContact.name,
      email: insertContact.email,
      message: insertContact.message,
      createdAt: new Date()
    };
    this.contacts.push(contact);
    this.contactId++;
    return contact;
  }
}

export const storage = new InMemoryStorage();
