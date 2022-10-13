"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRepository = void 0;
const Group_1 = require("../entities/Group");
const data_source_1 = require("../data-source");
exports.groupRepository = data_source_1.AppDataSource.getRepository(Group_1.Group);
