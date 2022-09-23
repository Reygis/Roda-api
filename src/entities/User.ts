import { Review } from './Review';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm"

import { Length } from "class-validator"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    iduser: number
    
    @Column()
    @Length(2, 70)
    name:string
    
    @Column({unique: true})
    @Length(3, 70)
    email:string
    
    @Column()
    @Length(7, 128)
    passowrd:string
    
    @Column()
    @Length(2, 500)
    bio:string

    @Column()
    imgscc:string

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];
    
}