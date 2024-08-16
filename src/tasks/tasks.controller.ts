import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('email/:email')
    findTaskByEmail(@Param('email') email: string) {
        return this.tasksService.getOneByEmail(email);
    }

    @Get(':id')
    findTask(@Param('id') id: number) {
        return this.tasksService.getOneTask(id)
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        return this.tasksService.createTask(newTask.name, newTask.age, newTask.email);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: number) {
        return this.tasksService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: number, @Body() updatedFields: updateTaskDto) {
        return this.tasksService.updateTask(id, updatedFields)
    }
}
