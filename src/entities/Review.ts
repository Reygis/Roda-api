import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm"

import { Length } from "class-validator"
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
    @Length(1, 5)
    rating: number
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.reviews)
    @JoinColumn({ name: "user_iduser" })
    user: User;

    @ManyToOne(() => Book, (book) => book.reviews)
    @JoinColumn({ name: "book_idbook" })
    book: Book;
    
}