import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { account_id: id }});
  }
  
  findUserByToken(token: string) {
    return this.prisma.user.findFirst({ where: { accessToken : token }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto
    });
  }

  updateByAccountId(account_id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { account_id: account_id },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id: id }});
  }
}
