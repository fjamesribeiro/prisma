import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { UserEntity } from "../user.entity";

@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaService){}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prisma.user.create({data: createUserDto});
      }
    
     async findAll(): Promise<UserEntity[]> {
        return this.prisma.user.findMany();
      }
    
    async findOne(id: number): Promise<UserEntity> {
        return this.prisma.user.findUnique({where: {id}})
      }
    
     async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>  {
        return this.prisma.user.update({ where: {
          id
        }, data : updateUserDto
        })
      }
    
      async remove(id: number) {
        return this.prisma.user.delete({where:{id}})
      }
}