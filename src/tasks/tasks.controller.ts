import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Post("document")
    @UseInterceptors(FileInterceptor('document'))
    public async addDocument(@UploadedFile() file: Express.Multer.File): Promise<any> {
        return this.tasksService.processPdf(file);
    }

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
        return this.tasksService.createTask(newTask.name, newTask.age, newTask.email, newTask.localidad, newTask.category);
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
