"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRepository = void 0;
const Review_1 = require("../entities/Review");
const data_source_1 = require("../data-source");
exports.reviewRepository = data_source_1.AppDataSource.getRepository(Review_1.Review);
