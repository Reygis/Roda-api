import { Group } from '../entities/Group';
import { AppDataSource } from '../data-source'

export const groupRepository = AppDataSource.getRepository(Group)