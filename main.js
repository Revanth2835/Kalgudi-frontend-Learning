"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var student1 = new student_1.Student("Revanth Kumar", 21);
console.log(student1.age);
console.log(student1.name);
(0, student_1.greet)();
console.log(student_1.company);
