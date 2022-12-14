import { Request, Response } from "express";
import { groupRepository } from '../repositories/groupRepository';
import { userRepository } from "../repositories/userRepository";

export class GroupController {

    static create = async (req: Request, res: Response) => {
        const { name, about, discussion, books, label } = req.body;

        const groupExists = await groupRepository.findOneBy({ name });
        if (groupExists) {
            return res.status(400).json({ message: "Nome de grupo já está em uso!" })
        }

        const iduser = req.user.iduser
        const users = await userRepository.find({ where: { iduser } });
        const newGroup = groupRepository.create({
            name,
            about,
            discussion,
            books,
            label,
            users
        });

        await groupRepository.save(newGroup);

        return res.status(201).send(); 
    }

    static listAllGroups = async (req: Request, res: Response) => {
        const groups = await groupRepository.find({
            select: ["idgroup", "name", "about", "discussion"]
        })
        return res.send(groups)
    }

    static groupsOfUser = async (req: Request, res: Response) => {
        const { iduser } = req.user;

        const groups = await userRepository.findOne({
            relations: {
                groups:{
                    users:true,
                }
            },
            where: {
                iduser: iduser
            }
        })  
        
        const filtredgroups:any = []
        groups?.groups.forEach( element => {
            const { users:_, ...filtredelement } = element 
            Object.assign(filtredelement, {numberofusers:element.users.length})
            filtredgroups.push(filtredelement);
        })
        
        return res.send(filtredgroups)
    }
}
