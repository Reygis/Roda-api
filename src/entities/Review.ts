import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm"

import { Length, IsInt, Min, Max } from "class-validator"
import { User } from "./User"
import { Book } from "./Book"

@Entity("reviews")
export class Review {

    @PrimaryGeneratedColumn()
    idreview: number
    
    @Column()
    @Length(2, 70)
    tags: string
    
    @Column()
    @Length(2, 500)
    content: string
    
    @Column()
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.reviews)
    @JoinColumn({ name: "users_iduser" })
    users: User;

    @ManyToOne(() => Book, (book) => book.reviews)
    @JoinColumn({ name: "books_idbook" })
    books: Book;
    
}