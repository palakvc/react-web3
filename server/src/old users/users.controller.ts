import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from "express";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Post()
    addUser(
        @Body('username') userName: string,
        @Body('password') password: string,
    ): any {
        const generatedUserId = this.usersService.insertUser(userName, password);
        return { id: generatedUserId };
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') userId: string) {
        return this.usersService.getUserById(userId);
    }

    @Patch(':id')
    updateUser(
        @Param('id') userId: string,
        @Body('username') userName: string
    ) {
        const updatedUser = this.usersService.updateUser(userId, userName)
        return updatedUser;
    }

    @Delete(':id')
    deleteUser(@Param('id') userId: string, @Res() res: Response) {
        this.usersService.deleteUser(userId);
        res.status(HttpStatus.OK).json({"message": "User deleted Successfully."})
    }
}