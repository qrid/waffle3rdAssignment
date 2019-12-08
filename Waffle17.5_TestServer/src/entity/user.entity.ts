import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    major: String;

}