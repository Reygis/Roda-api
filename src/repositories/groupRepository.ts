import { Group } from '../entities/Group';
import { AppDataSource } from '../database/data-source'

export const groupRepository = AppDataSource.getRepository(Group)