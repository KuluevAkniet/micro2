import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TodoRepository } from '../repositories/todo.repository';
import { CreateTodoDto } from './dto/create-todos';
import { UpdateDto } from './dto/update-todos.dto';

@Injectable()
export class TodoService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly todoRepository: TodoRepository
    ){}
    private tokens = {}

    async getData(data: { name: string, lastname:string, password:string}){
        try{
           
           if (this.tokens[data.name]) {
              const result = this.jwtService.verify(this.tokens[data.name])
            // есои вернул true, значит токен валидный
              return true;
            } else {
                
              const userToken = this.jwtService.sign(data);
              this.tokens[data.name] = userToken;
              return true;
           }
            
          }catch(e){
             console.log("Время истекло")
             return false;
        }
    }

    async create(dto: CreateTodoDto){
       return await this.todoRepository.create(dto)
    }

    async findAll(){
        return await this.todoRepository.find()
    }

    async update(id: string, dto: UpdateDto){
        return await this.todoRepository.update(id, dto)
    }

    async delete(id: string){
        return await this.todoRepository.delete(id)
    }
}
