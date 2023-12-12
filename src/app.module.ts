import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [
    TodoModule,
    DatabaseModule
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
