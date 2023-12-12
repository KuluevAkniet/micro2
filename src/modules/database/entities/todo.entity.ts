import { BaseEntity } from "src/shares/base.entity";
import { Column, Entity } from "typeorm";

@Entity('todos')
export class TodoEntity extends BaseEntity {
    @Column()
    title: string;
  
    @Column()
    completed: boolean;
  
    @Column()
    description: string;
}