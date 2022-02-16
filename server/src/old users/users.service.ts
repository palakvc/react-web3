import { Injectable, NotFoundException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { User } from "./user.model";

@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(username: string, password: string) {
        const userId = randomUUID();
        const newUser = new User(userId, username, password)
        this.users.push(newUser);
        return userId;
    }

    getAllUsers() {
        return [...this.users];
    }

    getUserById(userId: string) {
        const user = this.findUserById(userId)[0];
        return { ...user };
        
    }
    
    updateUser(userId: string, userName: string) {
        const [user, index] = this.findUserById(userId);
        const updatedUser = {...user};
        if(userName) {
            updatedUser.username = userName; 
        }
        this.users[index] = updatedUser;
        return updatedUser;
    }

    private findUserById(userId): [User, number] {
        const userIndex = this.users.findIndex((user) => user.id === userId);
        const user = this.users[userIndex];
        if(!user) {
            throw new NotFoundException("Could not found User")
        }
        return [user, userIndex];
    }

    deleteUser(userId) {
        const index = this.findUserById(userId)[1];
        this.users.splice(index, 1);
    }
}