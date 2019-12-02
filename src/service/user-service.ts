import { Connection, DeleteResult } from 'typeorm';
import { User } from '../entity/User';

export class UserService {
  constructor(readonly connection: Connection) { }

  private userRepository = this.connection.getRepository(User);

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async getUser(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async createUser(user: User): Promise<User> {
    const created = await this.userRepository.create(user);
    return await this.userRepository.save(created);
  }

  public async patchUser(user: User): Promise<User> {
    const patch = await this.userRepository.findOne(user.id);
    this.userRepository.merge(patch, user);
    return await this.userRepository.save(patch);
  }

  public async deleteUser(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
