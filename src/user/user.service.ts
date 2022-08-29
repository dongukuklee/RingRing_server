import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entities';
const findUserIdxById  = (arr:User[],id:number)=>{
    return arr.findIndex(user=>user.id ===id)
}
@Injectable()
export class UserService {
    private users:User[] = []

    getAll():User[]{
        return this.users
    }

    getOne(id:number):User{
        return this.users.find(user=>user.id===id)
    }

    removeOne(id:number):Boolean{
        const userIdx = findUserIdxById(this.users,id)
        if(userIdx ===-1) throw new Error("user not found");
        this.users.splice(userIdx,1)
        return true
    }

    createUser(user:CreateUserDto):Boolean{
        const newUser ={id:this.users[-1].id+1 ,...user}
        this.users = this.users.concat(newUser)
        return true
    }
}
