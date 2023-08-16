import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor() {

  }
  getHello(): string {
    return 'Hello World!';
  }
  
  getCalculator(a: number, b: number){
    return a + b;
  }

  getDataBase(){
    return process.env.DATABASE_ENV;
  }
}
