import { Review } from '../entities/Review';
import { AppDataSource } from '../data-source'

export const reviewRepository = AppDataSource.getRepository(Review)