import { User } from '../entities/User';
import { AppDataSource } from '../database/data-source'

export const userRepository = AppDataSource.getRepository(User)