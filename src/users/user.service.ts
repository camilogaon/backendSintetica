import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { users } from "@prisma/client"

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async getAllUsers(): Promise<users[]> {
        return this.prisma.users.findMany();
    }

    async getUserById(idusers): Promise<users> {
        return this.prisma.users.findUnique({
            where: {
                idusers
            }
        })
    }

    async createUser(data: users): Promise<users> {
        return this.prisma.users.create({
            data
        })
    }

    async updateUser(idusers , data: users): Promise<users> {
        return this.prisma.users.update({
            where: {
                idusers
            },
            data
        })
    }

    async deleteUser(idusers): Promise<users> {
        return this.prisma.users.delete({
            where:{
                idusers
            }
        })
    }
}