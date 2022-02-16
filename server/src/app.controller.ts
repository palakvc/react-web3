import { Body, Controller, Get, InternalServerErrorException, Param, Post, Req, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { AppDto } from './dto/app.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './users/dto/update-user.dto';
import { TransformInterceptor } from './transform.interceptor';

@Controller()
export class AppController {
  constructor(public jwtService: JwtService, private userService: UsersService) { }

  @Post('auth/login')
  @UseInterceptors(
    FileFieldsInterceptor([])
  )
  @UseInterceptors(TransformInterceptor)
  async login(@Req() req,@Body() appDto: AppDto, @Body() updateUserDto: UpdateUserDto, createUserDto: CreateUserDto) {
    const account_id = appDto.account_id
    const hash = appDto.hash
    const user = await this.userService.findOne(account_id);
    if (user) {
      return this.updateUserDetails(req, account_id, updateUserDto)
    } else {
      let userData = {
        account_id: account_id,
        hash: hash,
        username: "",
        full_name: "",
        email: "",
        bio: "",
        profileImage: "",
        coverImage: "",
        accessToken: ""
      }
      try {
        await this.userService.create(userData);
        return this.updateUserDetails(req, account_id, updateUserDto)
      } catch (error) {
        if (error.code === 'P2002') {
          throw new InternalServerErrorException('There is a unique constraint violation, a new user cannot be created with this ' + error.meta.target.join(','))
        }
        throw new InternalServerErrorException
      }
    }
  }

  async updateUserDetails(req, account_id,updateUserDto) {
    const payload = { username: account_id, sub: account_id };
    const token = this.jwtService.sign(payload)
    updateUserDto.accessToken = token;
    const data = await this.userService.updateByAccountId(account_id, updateUserDto)
    if(data?.profileImage) {
      data.profileImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.profileImage}`;
    }
    if(data?.coverImage) {
      data.coverImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.coverImage}`;
    }
    const statusCode = 200;
    return { statusCode, message: 'User details', data };
  }
  @Get('auth/login')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    const account_id = req.user.userId
    const data = await this.userService.findOne(account_id)
    if(data?.profileImage) {
      data.profileImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.profileImage}`;
    }
    if(data?.coverImage) {
      data.coverImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.coverImage}`;
    }
    const statusCode = 200;
    return { statusCode, message: 'User details', data };
  }

}
