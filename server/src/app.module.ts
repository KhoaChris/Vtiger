import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    MongooseModule.forRoot(process.env.DATABASE_ENV),
    ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
