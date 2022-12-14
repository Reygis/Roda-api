"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const groupRepository_1 = require("../repositories/groupRepository");
const userRepository_1 = require("../repositories/userRepository");
class GroupController {
}
exports.GroupController = GroupController;
_a = GroupController;
GroupController.create = async (req, res) => {
    const { name, about, discussion, books, label } = req.body;
    const groupExists = await groupRepository_1.groupRepository.findOneBy({ name });
    if (groupExists) {
        return res.status(400).json({ message: "Nome de grupo já está em uso!" });
    }
    const iduser = req.user.iduser;
    const users = await userRepository_1.userRepository.find({ where: { iduser } });
    const newGroup = groupRepository_1.groupRepository.create({
        name,
        about,
        discussion,
        books,
        label,
        users
    });
    await groupRepository_1.groupRepository.save(newGroup);
    return res.status(201).send();
};
GroupController.listAllGroups = async (req, res) => {
    const groups = await groupRepository_1.groupRepository.find({
        select: ["idgroup", "name", "about", "discussion"]
    });
    return res.send(groups);
};
GroupController.groupsOfUser = async (req, res) => {
    const { iduser } = req.user;
    const groups = await userRepository_1.userRepository.findOne({
        relations: {
            groups: {
                users: true,
            }
        },
        where: {
            iduser: iduser
        }
    });
    const filtredgroups = [];
    groups === null || groups === void 0 ? void 0 : groups.groups.forEach(element => {
        const { users: _, ...filtredelement } = element;
        Object.assign(filtredelement, { numberofusers: element.users.length });
        filtredgroups.push(filtredelement);
    });
    return res.send(filtredgroups);
};
