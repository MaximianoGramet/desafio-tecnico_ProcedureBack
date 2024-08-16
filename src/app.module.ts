import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Task } from './tasks/task.entity';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'tramite_db',
    synchronize: true,
    entities: [Task]
  })
  ],//especifica los modulos que se van a utilizar
  controllers: [],//los metodos que se pueden llamar desde el navegador
  providers: [],//funciones que se pueden reutilizar en otros archivos
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
