import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @ApiProperty({
        description: 'cама задачи',
        example: 'купить хлеб',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        description: 'выполнена ли задача',
        example: 'true либо false',
        required: true,
      })
    @IsString()
    @IsNotEmpty()
    completed: boolean;
    
    @ApiProperty({
        description: 'Описание задачи',
        example: 'необходимо сходить в магазин и купить хлеб',
        required: true,
      })
    @IsString()
    @IsNotEmpty()
    description: string;
}