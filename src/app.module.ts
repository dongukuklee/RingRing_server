import { Module } from '@nestjs/common';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [WeatherController, UserController],
  //controllers 는 express 에서 Router와 유사하다.
  //url을 가져오고 함수를 실행한다.
  providers: [WeatherService, UserService],
})
export class AppModule {}
