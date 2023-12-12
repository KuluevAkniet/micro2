import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TodoService } from './todo.service';
import { ApiTags } from '@nestjs/swagger';
import { TodoRepository } from '../repositories/todo.repository';
import { CreateTodoDto } from './dto/create-todos';
import { UpdateDto } from './dto/update-todos.dto';

@ApiTags('Todo for users')
@Controller('todo')
export class TodoController {
    constructor(
      private readonly todoService: TodoService,
      ){}

    @MessagePattern({cmd: 'token'})
    async getData(@Payload() data:{name: string, lastname:string, password:string}){
      return await this.todoService.getData(data)
    }
  
    @Post('create')
     async create(@Body() dto: CreateTodoDto){
       return await this.todoService.create(dto)
    }
    
    @Get('getAll')
    async findAll(){
       return await this.todoService.findAll()
    }

    @Patch('update')
    async update(@Body() dto: UpdateDto, @Param('id') id: string){
      return await this.todoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param("id") id: string){
       return await this.todoService.delete(id)
    }
}
