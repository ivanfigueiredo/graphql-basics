import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../../repository/user.repository';
import { Cat, CatDocument } from './user.model';

export class UserRepository implements IUserRepository {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    @InjectModel(Cat.name)
    private readonly model: Model<CatDocument>
  ) {}

  async save(user: any): Promise<void> {
    const newUser = new this.model(user);
    await newUser.save();
  }
}
