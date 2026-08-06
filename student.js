"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company = exports.greet = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
exports.Student = Student;
function greet() {
    console.log("Hello from Exported File");
}
exports.greet = greet;
exports.company = "Kalgudi";
