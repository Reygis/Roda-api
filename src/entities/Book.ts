import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
    ManyToOne
} from "typeorm"

import { Length } from "class-validator"

import { User } from "./User"
import { Group } from './Group';
import { Review } from "./Review"


@Entity("books")
export class Book {

    @PrimaryGeneratedColumn()
    iduserbook: number
    
    @Column()
    @Length(2, 70)
    name: string
    
    @Column({ nullable: true, type:"simple-array" })
    authors: Array<string>

    @Column({ nullable: true, type:"text" })
    description: string
   
    @Column({ nullable: true })
    pageCount: number

    @Column({ nullable: true })
    imageurl: string
    
    @Column({ nullable: true, type:"simple-array" })
    genres: Array<string>
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.books)
    @JoinColumn({ name: "users_iduser" })
    users: User;

    @OneToMany(() => Review, (review) => review.books)
    reviews: Review[];

    // @OneToMany(() => Group, (group) => group.books)
    // groups: Group[];
    
}