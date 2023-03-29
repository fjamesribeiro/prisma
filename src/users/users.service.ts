import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { UnauthorizedError } from 'src/common/errors/types/UnauthrorizedError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entities/repository/user.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  findAll() {
    // throw new UnauthorizedError("Não autorizado");
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('Usuário nao encontrtadoi');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
