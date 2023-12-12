import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoEntity } from "../database/entities/todo.entity";
import { BaseRepository } from "src/shares/base.repository";
import { CreateTodoDto } from "src/modules/todo/dto/create-todos";


@Injectable()
export class TodoRepository  extends BaseRepository<TodoEntity> {
    constructor(
        @InjectRepository(TodoEntity)
        protected readonly repository: Repository<TodoEntity>
    ){
        super();
    }

    async findById(id: string) {
        return this.repository.findOne({where:{id:id}})
    }

    async update(id: string, dto: CreateTodoDto ) {
        return this.repository.update(id, dto);
    }
    
    async create(dto: CreateTodoDto){
      const user = this.repository.create(dto)  
      return await this.repository.save(user)
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
}