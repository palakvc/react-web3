import { ApiProperty } from "@nestjs/swagger";

export class AppDto {
    
    @ApiProperty()
    account_id: string;
    
    @ApiProperty()
    hash: string;

    @ApiProperty()
    token: string;
}
