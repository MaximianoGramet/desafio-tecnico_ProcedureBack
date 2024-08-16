import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TaskCategory, TaskStatus } from "../task.entity";

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    email: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsOptional()
    @IsString()
    @MaxLength(1000, { message: 'Comment is too long. Maximum length is 1000 characters.' })
    comment?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    localidad: string;

    @IsIn(Object.values(TaskCategory))
    @IsNotEmpty()
    category: TaskCategory;



    // @IsNotEmpty()
    // dni: string;
}

export class updateTaskDto {

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsNumber()
    @IsOptional()
    @MaxLength(3)
    age?: number;

    @IsOptional()
    dni?: string;

    @IsOptional()
    @IsString()
    @MaxLength(1000, { message: 'Comment is too long. Maximum length is 1000 characters.' })
    comment?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.CANCELLED])
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    @MaxLength(128)
    localidad?: string;

    @IsOptional()
    @IsIn(Object.values(TaskCategory))
    category?: TaskCategory;
}