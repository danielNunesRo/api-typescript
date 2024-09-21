import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsersEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    email: string

    @Column()
    idade: number

    @Column({default: true})
    isActive: boolean


}