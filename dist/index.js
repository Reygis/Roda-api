"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
const port = process.env.PORT || 3030;
data_source_1.AppDataSource.initialize().then(() => {
    app_1.default.listen(port, () => {
        console.log('Server online on port :: http://localhost:' + port);
    });
});
