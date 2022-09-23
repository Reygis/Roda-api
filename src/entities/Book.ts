import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm"

import { Length } from "class-validator"
// import { User } from "./User"   // os books serão criados por um USER? Por um USER_ADMIN? SEEDERS? 
                                // Decidir para finalizar relacionamentos e demais funções.
import { Review } from "./Review"

@Entity("books")
export class Book {

    @PrimaryGeneratedColumn()
    idbook: number
    
    @Column()
    @Length(2, 70)
    name: string
    
    @Column()
    @Length(2, 70)
    genres: string
    
    @Column()
    @Length(2, 255)
    description: string
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Review, (review) => review.book)
    reviews: Review[];
    
}