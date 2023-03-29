import { User } from "@prisma/client";

export class UserEntity implements  User{
    id: number;
    email: string;
    nome: string;
    admin: boolean;
    createdAt: Date;
}
