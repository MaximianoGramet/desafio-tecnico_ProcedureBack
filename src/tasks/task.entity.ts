import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    CANCELLED = 'CANCELLED'
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 128 })
    name: string

    @Column("varchar", { length: 128 })
    email: string

    // @Column({ type: 'longtext' })
    // dni: string

    @Column("int")
    age: number

    @Column("longtext", { nullable: true })
    comment: string;

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.IN_PROGRESS
    })
    status: TaskStatus
}

const task = new Task()