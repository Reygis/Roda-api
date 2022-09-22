import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    iduser: number
    
    @Column()
    name:string
    
    @Column()
    email:string
    
    @Column()
    passowrd:string
    
    @Column()
    bio:string

    @Column()
    imgscc:string
    
}