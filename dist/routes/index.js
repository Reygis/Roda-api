"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const auth_1 = __importDefault(require("./auth"));
const book_1 = __importDefault(require("./book"));
const review_1 = __importDefault(require("./review"));
const routes = (0, express_1.Router)();
routes.use('/login', auth_1.default);
routes.use('/user', user_1.default);
routes.use('/book', book_1.default);
routes.use('/review', review_1.default);
exports.default = routes;
