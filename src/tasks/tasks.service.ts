import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { updateTaskDto } from './dto/task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    getAllTasks(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    async getOneTask(id: number): Promise<Task> {
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return task;
    }

    async getOneByEmail(email: string): Promise<Task> {
        const task = await this.tasksRepository.findOneBy({ email });
        if (!task) {
            throw new NotFoundException(`Task with email "${email}" not found`);
        }
        return task;
    }

    async createTask(name: string, age: number, email: string): Promise<Task> {
        const task: Task = this.tasksRepository.create({
            name: name,
            age: age,
            email: email,
            // dni: dni,
            status: TaskStatus.IN_PROGRESS
        });
        await this.tasksRepository.save(task);
        return task;
    }

    async updateTask(id: number, updatedFields: updateTaskDto): Promise<Task> {
        const task = await this.getOneTask(id);
        Object.assign(task, updatedFields);
        await this.tasksRepository.save(task);
        return task;
    }

    async deleteTask(id: number): Promise<void> {
        const taskIndex = await this.tasksRepository.delete(id);
        if (taskIndex.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }
}