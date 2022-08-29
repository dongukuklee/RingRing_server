import { Body, Controller,Get, Param,Post } from '@nestjs/common';
import axios from '@nestjs/axios'
@Controller('weather')
export class WeatherController {
    @Get('/')
    sayHi(){
        return `hello`
    }
    
    @Post('/')
    getData(@Body() bodyData){
        
    }
}
