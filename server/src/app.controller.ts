import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  //Dùng query
  @Get('/calculates')
  getCalculator(@Query('a') a:string, @Query('b') b: string){
    console.log(a)
    console.log(b);
    return this.appService.getCalculator(parseInt(a),parseInt(b));
  }


  //Dùng Param
  @Get('/calculate/:a/:b')
  getCalculators(@Param('a') a:string, @Param('b') b: string){
    console.log(a)
    console.log(b);
    return this.appService.getCalculator(parseInt(a),parseInt(b));
  }

  @Get('/dtb')
  getDatabase(){
    return this.appService.getDataBase();
  }

}
