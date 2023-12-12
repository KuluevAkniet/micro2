import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ DatabaseModule,JwtModule.registerAsync({
    useFactory: async(configService: ConfigService) => ({
      secret: configService.get("JWT_SECRET"),
      signOptions: {expiresIn:configService.get("JWT_EXPIRES_IN")}
    }),
    inject: [ConfigService]
  }),
],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
