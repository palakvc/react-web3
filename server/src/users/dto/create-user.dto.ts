import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty({ required: true, nullable: false })
    account_id: string;
    
    @ApiProperty({ required: true, nullable: false })
    hash: string;
    
    @ApiProperty()
    username: string;
    
    @ApiProperty()
    full_name: string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    bio: string;

    @ApiProperty({nullable: true})
    profileImage: string;

    @ApiProperty({nullable: true})
    coverImage: string;

    @ApiProperty({nullable: true})
    accessToken: string;
}
