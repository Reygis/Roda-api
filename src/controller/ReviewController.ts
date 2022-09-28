import { userRepository } from '../repositories/userRepository';
import { bookRepository } from '../repositories/bookRepository';
import { reviewRepository } from '../repositories/reviewRepository';
import { Request, Response } from "express"
import jwt from "jsonwebtoken";

export class ReviewController {
    
	static create = async (req: Request, res: Response) => {

        const {authorization} = req.headers;
        if (!authorization){return}
        const token = authorization.split(" ")[1];
         
        let iduser
        try {
            const jwtPayload = <any>jwt.verify(token, process.env.JWT_PASS ?? "")
            iduser = jwtPayload.userId
        } catch (error) {
            return res.status(401).send
        }
        
        const users = await userRepository.findOneBy({iduser})
        if (!users) return res.status(404).json({message: 'User not found'})
        
        const iduserbook  = parseInt(req.params.bookid);
        const books = await bookRepository.findOneBy({iduserbook});
        if (!books) return res.status(404).json({message: 'book not found'})
        
        const { content, rating, tags } = req.body;

        try {
            const review = reviewRepository.create({ content, rating, tags, users, books })
            await reviewRepository.save(review)
        } catch (error) {
            return res.status(400)
        }

        return res.status(201).json('review Created')
       
    }	
}
