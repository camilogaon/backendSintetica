import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import { users } from "@prisma/client"

@Controller('users')
export class UserController {


    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Post()
    async createUser(@Body() data: users){
        return this.userService.createUser(data)
    }

    @Get(':idusers')
    async getUserById(@Param('idusers') idusers){
        const userFound= await this.userService.getUserById(idusers)
        if (!userFound) throw new NotFoundException('User does not exist')
        return userFound
    }

    @Delete(':idusers')
    async deleteUser(@Param('idusers') idusers){
        try{
            return await this.userService.deleteUser(idusers)
        }catch(error){
            throw new NotFoundException("User does not exist")
        }
    }

    @Put(':idusers')
    async updateUser(@Param('idusers') idusers, @Body() data: users){
        try {
            return await this.userService.updateUser(idusers, data)
        }catch (error) {
            throw new NotFoundException("User does not exist")
        }

    }


    
}