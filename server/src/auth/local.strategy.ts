import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Body, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private readonly usersService: UsersService) {
    super();
  }

  async validate(account_id: string, hash: string): Promise<any> {
    const user = await this.authService.validateUser(account_id, hash);
    if (!user) {
      let data: any = {
        account_id: account_id,
        hash: hash,
        username: "",
        full_name: "",
        email: "",
        bio: "",
        profileImage: "",
        coverImage: "",
      }
      try {
        const user = await this.usersService.create(data);
        return user
      } catch (error) {
        if (error.code === 'P2002') {
          throw new InternalServerErrorException('There is a unique constraint violation, a new user cannot be created with this ' + error.meta.target.join(','))
        }
        console.log(error)
        throw new InternalServerErrorException
      }
      // throw new UnauthorizedException();
    }
    return user;
  }
}