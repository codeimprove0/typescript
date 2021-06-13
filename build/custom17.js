"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Bike_1 = __importDefault(require("./Bike"));
/* import cardata from './Car' */
var Car_1 = require("./Car");
var carObj = new Car_1.Cars();
console.log(carObj.data);
console.log(Bike_1.default);
