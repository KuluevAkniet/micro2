import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeormConfigService } from "./typeorm-config.service";
import { TodoEntity } from "./entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

@Module({
    imports:[TypeOrmModule.forRootAsync({
        imports: [ConfigModule.forRoot({
            isGlobal: true
          })],
          useClass: TypeormConfigService,
          inject: [ConfigService],
        }),
     TypeOrmModule.forFeature([
        TodoEntity
     ])
    ],
    providers: [
        TodoRepository
    ],
    exports: [
        TodoRepository
    ]
})
export class DatabaseModule {}