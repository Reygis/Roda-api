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
    
    @Column()
    @Length(2, 70)
    genres: string
    
    @Column()
    @Length(2, 255)
    description: string

    @Column()
    @Length(1, 5)
    condition: number
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.books)
    @JoinColumn({ name: "users_iduser" })
    users: User;

    @OneToMany(() => Review, (review) => review.books)
    reviews: Review[];

    @OneToMany(() => Group, (group) => group.books)
    groups: Group[];
    
}

// import { 
//     Entity, 
//     PrimaryGeneratedColumn, 
//     Column,
//     CreateDateColumn,
//     UpdateDateColumn,
//     OneToMany
// } from "typeorm"

// import { Length } from "class-validator"

// import { Review } from "./Review"

// @Entity("books")
// export class Book {

//     @PrimaryGeneratedColumn()
//     idbook: number
    
//     @Column()
//     @Length(2, 70)
//     name: string
    
//     @Column()
//     @Length(2, 70)
//     genres: string
    
//     @Column()
//     @Length(2, 255)
//     description: string
    
//     @CreateDateColumn()
//     created_at: Date;
  
//     @UpdateDateColumn()
//     updated_at: Date;

//     @OneToMany(() => Review, (review) => review.book)
//     reviews: Review[];
    
// }