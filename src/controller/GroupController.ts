import { Group } from './../entities/Group';
import { group } from 'console';
import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/secret";
import { groupRepository } from '../repositories/groupRepository';
export class GroupController {
    async create(req: Request, res: Response){
    const { name, about, discussion, books } = req.body;

    const groupExists = await groupRepository.findOneBy({name});
    

    if(groupExists){
        return res.status(400).json({message: "Nome de grupo já está em uso!"})}


    const newGroup = groupRepository.create({
        name,
        about,
        discussion,
        books
    });

    await groupRepository.save(newGroup);

    }
    static listAllGroups = async (req: Request, res: Response) => {      
        const groups = await groupRepository.find({
            select: ["idgroup", "name", "about", "discussion"]
        })
        return res.send(groups)
    }	}
