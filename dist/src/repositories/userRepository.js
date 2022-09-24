"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
exports.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
