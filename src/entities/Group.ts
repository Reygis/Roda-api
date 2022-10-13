import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    ManyToOne,
    JoinColumn
} from "typeorm"

import { Length } from "class-validator"

import { User } from "./User"
import { Book } from "./Book"


@Entity("groups")
export class Group {

    @PrimaryGeneratedColumn()
    idgroup: number
    
    @Column()
    @Length(2, 70)
    name: string
    
    @Column()
    @Length(0, 255)
    about: string
    
    @Column()
    @Length(0, 255)
    discussion: string

    @Column()
    books: string
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    // @ManyToOne(() => Book, (book) => book.groups)
    // @JoinColumn({ name: "books_idbook" })
    // books: Book;

    @ManyToMany(() => User, (user) => user.groups)
    users: User[]

}