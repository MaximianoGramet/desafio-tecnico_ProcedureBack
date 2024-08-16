import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    CANCELLED = 'CANCELLED'
}

export enum TaskCategory {
    SOCIAL = 'interés social',
    CULTURAL = 'cultural',
    EDUCATIONAL = 'educativo',
    BENEFIT = 'beneficio',
    COMMERCIAL = 'comercial'
}
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 128 })
    name: string

    @Column("varchar", { length: 128 })
    email: string

    @Column({ type: 'longtext', nullable: true })
    dni: string

    @Column("int")
    age: number

    @Column({ type: 'longtext', nullable: true })
    comment: string;

    @Column({
        type: "enum",
        enum: TaskCategory
    })
    category: TaskCategory

    @Column("varchar", { length: 128 })
    localidad: string;

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.IN_PROGRESS
    })
    status: TaskStatus
}

const task = new Task()