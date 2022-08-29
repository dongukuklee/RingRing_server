import { Controller,Get,Post,Param, Delete, Put, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entities';
import { UserService } from './user.service';
 
@Controller('user')
export class UserController {
    constructor(readonly userService:UserService){}

    @Get('/healthCheck')
    sayHi(){
        return 'hi'
    }

    @Get('/')
    getAll(){
        return this.userService.getAll()
    }
 
    @Get('/:id')
    getOne(@Param('id') userId:number):User{
        return this.userService.getOne(userId)
    }

    @Delete('/:id')
    removeOne(@Param('id') userId:number){
        return this.userService.removeOne(userId)
    }

    @Post('/')
    createUser(@Body() userData:CreateUserDto){
        return this.userService.createUser(userData)
    }

}
