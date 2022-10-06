
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    JoinTable
} from "typeorm"

import { Length } from "class-validator"

import { Group } from './Group';
import { Book } from './Book';
import { Review } from './Review';

import * as bcrypt from "bcryptjs"
// import { group } from 'console';

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
    @Length(4, 128)
    password:string
    
    @Column({ nullable: true })
    @Length(500)
    bio:string

    @Column({ nullable: true })
    imgurl:string

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @OneToMany(() => Review, (review) => review.users)
    reviews: Review[];

    @OneToMany(() => Book, (book) => book.users)
    books: Book[];

    @ManyToMany(() => Group, group => group.users, {
    cascade: true
    })
    @JoinTable()
    groups: Group[];


    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkPasswordIsValid(unencripytedPassword: string) {
        return bcrypt.compareSync(unencripytedPassword, this.password)
    }
    
}