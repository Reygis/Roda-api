"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./database/app"));
const data_source_1 = require("./database/data-source");
data_source_1.AppDataSource.initialize().then(() => {
    app_1.default.listen(3030, () => {
        console.log('Server online on port :: http://localhost:3030');
    });
});
