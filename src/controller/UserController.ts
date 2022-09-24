import { userRepository } from '../repositories/userRepository';
import { User } from '../entities/User';
import { Request, Response } from "express"
import { validate } from 'class-validator';
import bcrypt from 'bcryptjs';

export class UserController {
    
	static createUser = async (req: Request, res: Response) => {
		let { name, email, password, bio, imgurl } = req.body
        
        let user: User = new User()
        user.name = name
				user.email = email
				user.password = password
        user.bio = bio
        user.imgurl = imgurl

        const errors = await validate(user)
        if(errors.length > 0) {
            return res.status(400).send(errors)
        }

		const emailExists = await userRepository.findOneBy({email})

		const hashPassword = await bcrypt.hash(password, 10)

		try {
			const newUser = userRepository.create({ name, email, password, bio, imgurl })
			await userRepository.save(newUser)
			const {password: _, ...user} = newUser
			return res.status(201).json(user)

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Server Error' })
		}
	}

	static editUser = async (req: Request, res: Response) => {
		const { name, email, password, bio, imgurl } = req.body
		const idUser : number = parseInt(req.params.idUser)
		let user : User

		try {
			user = await userRepository.findOneByOrFail({ iduser: Number(idUser) })
		} catch (error) {
			return res.status(404).send("User not found")
		}

		if(name) {
			user.name = name
		}
		
		if(email) {
			user.email = email
		}
    
    if(password){
      const newPassword = bcrypt.hashSync(password, 10)
      user.password = newPassword
    }

		if(bio) {
			user.bio = bio
		}

		if(imgurl) {
			user.imgurl = imgurl
		}
		
		
		const errors = await validate(user)

        if (errors.length > 0) {
            return res.status(400).send(errors)
        }

        try {
            await userRepository.save(user)    
        } catch (error) {
            return res.status(409).send("Email already in use")
        }

        return res.status(201).send("edited user")
    }


    static userById =  async (req: Request, res: Response) => {
      const iduser: number = parseInt(req.params.iduser, 10)

      let user: User

      try {
          user = await userRepository.findOneByOrFail({iduser})
      } catch (error) {
          return res.status(404).send("User not found")            
      }
  
      return res.send(user)
  }


  static userByEmail =  async (req: Request, res: Response) => {
    const email: string = req.params.email

    let user: User

    try {
        user = await userRepository.findOneByOrFail({email})
    } catch (error) {
        return res.status(404).send("User not found")            
    }

    return res.send(user)
  }

  static userByName =  async (req: Request, res: Response) => {
    const name: string = req.params.email

    let user: User

    try {
        user = await userRepository.findOneByOrFail({name})
    } catch (error) {
        return res.status(404).send("User not found")            
    }

    return res.send(user)
}

	static listAllUser = async (req: Request, res: Response) => {      
        const users = await userRepository.find({
            select: [ "iduser", "name", "email", "bio", "imgurl" ]
        })
        return res.send(users)
    }	
}