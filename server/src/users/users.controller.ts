import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, UseInterceptors, Res, Req, UploadedFiles, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { parse } from 'path';
import { Observable, of } from 'rxjs';
import { join } from 'path/posix';
import { TransformInterceptor } from 'src/transform.interceptor';

export const profileImageStorage = {
  storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (_req: any, file: { originalname: string; }, cb: (arg0: any, arg1: string) => void) => {
      const filename: string = parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = parse(file.originalname).ext;

      cb(null, `${filename}${extension}`)
    }
  })
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('profile-image/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
  }


  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'profileImage' },
      { name: 'coverImage' }
    ], profileImageStorage)
  )
  @UseInterceptors(TransformInterceptor)
  async create(@Req() req, @Body() createUserDto: CreateUserDto, @UploadedFiles() files: { profileImage?: any, coverImage?: any }) {
    let userData = {
      account_id: createUserDto?.account_id ? createUserDto.account_id : null,
      hash: createUserDto?.hash ? createUserDto.hash : null,
      username: createUserDto?.username ? createUserDto.username : "",
      full_name: createUserDto?.full_name ? createUserDto.full_name : "",
      email: createUserDto?.email ? createUserDto.email : "",
      bio: createUserDto?.bio ? createUserDto.bio : "",
      profileImage: createUserDto?.profileImage ? createUserDto.profileImage : "",
      coverImage: createUserDto?.coverImage ? createUserDto.coverImage : "",
      accessToken: ""
    }
    try {
      if (files?.profileImage) {
        userData.profileImage = files.profileImage[0].filename
      }
      if (files?.coverImage) {
        userData.coverImage = files.coverImage[0].filename
      }
      const data = await this.usersService.create(userData);
      if(data.profileImage) {
        data.profileImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.profileImage}`;
      }
      if(data.coverImage) {
        data.coverImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.coverImage}`;
      }
      let statusCode = 200;
      return { statusCode, message: 'User created successfully', data };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new InternalServerErrorException('There is a unique constraint violation, a new user cannot be created with this ' + error.meta.target.join(','))
      }
      throw new InternalServerErrorException
    }
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  async findAll(@Req() req) {
    let response = await this.usersService.findAll();
    let userData = [...response];
    userData?.map((user: any) => {
      if(user.profileImage) {
        user.profileImage = `${req.protocol}://${req.get('host')}${req.originalUrl}/profile-image/${user.profileImage}`;
      }
      if(user.coverImage) {
        user.coverImage = `${req.protocol}://${req.get('host')}${req.originalUrl}/profile-image/${user.coverImage}`;
      }
    })
    let data = userData
    return { message: 'User Details', data };
    // return userData;
  }

  @Get(':id')
  async findOne(@Req() req, @Param('id') id: string) {
    const user: any = await this.usersService.findOne(id);
    if(user) {
      if(user.profileImage) {
        user.profileImage = `${req.protocol}://${req.get('host')}${req.originalUrl}/profile-image/${user.profileImage}`;
      }
      if(user.coverImage) {
        user.coverImage = `${req.protocol}://${req.get('host')}${req.originalUrl}/profile-image/${user.coverImage}`;
      }
      let data = user
      return { message: 'User Details', data };
    } else {
      throw new InternalServerErrorException("Could not found user.")
    }
  }

  @Put(':id')

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'profileImage' },
      { name: 'coverImage' }
    ], profileImageStorage)
  )
  async update(@Req() req, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UploadedFiles() files: { profileImage?: any, coverImage?: any }) {
    if (files?.profileImage) {
      updateUserDto.profileImage = files.profileImage[0].filename
    }
    if (files?.coverImage) {
      updateUserDto.coverImage = files.coverImage[0].filename
    }
    try {
      const data = await this.usersService.update(+id, updateUserDto);
      if(data.profileImage) {
        data.profileImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.profileImage}`;
      }
      if(data.coverImage) {
        data.coverImage = `${req.protocol}://${req.get('host')}/users/profile-image/${data.coverImage}`;
      }
      let statusCode = 200;
      return { statusCode, message: 'User updated successfully', data };
    } catch (error) {
      console.log(error)
      if (error.code === 'P2002') {
        throw new InternalServerErrorException('There is a unique constraint violation, a new user cannot be created with this ' + error.meta.target.join(','))
      } else if (error.code === 'P2025') {
        throw new InternalServerErrorException(error.meta.cause)
      }
      throw new InternalServerErrorException
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.usersService.remove(+id);
      let statusCode = 200;
      return { statusCode, message: 'User removed successfully', data };
    } catch (error) {
      throw new InternalServerErrorException("Could not found user.")
    }
  }
}
