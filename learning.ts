/*

Types :
     1 . number :- numbers related
     2 . string :- Names 
     3 . boolean :- true or false 
     4 . any    :- any thing we can give as a value
     5 . unknown : we dont know the type similar to "any" but safer ===> we need to check before using it
     6 . null    :- wantedly made as null 
     7 . undefined  :- undefined we can use as undefined intially let name:string | undefined = undefined 
     8 . void  : if we dont return anything from function

     */


// =============================================== Data Types ===================== 
/*
// string

let uname: string = "Revanth";

console.log(uname);

// number

let age: number = 21;

console.log(age);

// boolean

let isEmployed: boolean = true;

console.log(isEmployed);

// any

let company: any;

company = "Kalgudi";

console.log(company);

company = 100;

console.log(company);

company = true;

console.log(company);

// unknown

let value: unknown = "Twenty One";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

// void

function greet(): void {
    console.log("Welcome to TypeScript");
}

greet();

// null

let manager: null = null;

console.log(manager);

// undefined

let address: undefined = undefined;

console.log(address);

function add(a:number , b:number):number{
    return a+b
};

function greet1():void{
    console.log("Hello Revanth Kumar");
};


let result:number = add(10,20);
console.log(result);
greet();
greet1();

*/

/*
let age : number = 21
if(age > 30){
    console.log("Adult")
}else{
    console.log("Tenager")
}

let i:number = 1;
for(i;i<=5;i++){
    console.log(i)
}
console.log(i)
let j:number = 1;
while(j<=5){
    console.log(j)
    j++
}
let k:number = 1;
do{
    console.log(k)
    k++
}while(k<=5)


// ============ for...of() =====================
let students: string[] = [
    "Revanth",
    "Rahul",
    "Kiran"
];

for (const student of students) {
    console.log(student);
}

// ======================== for...in=======================
let student = {
    name:"Revanth",
    age:21
}

for(const key in student){
    console.log(key)
}

*/


// ========================================= ARRAYS ============================

/*
let numbers:number[] = [10,20,30]
console.log(numbers)
console.log(numbers[0]) 

let students : string[] = ["Revanth","Kumar","Mani"]
console.log(students[2]) 

let data: any[] = [
    "Revanth",
    21,
    true
]
console.log(data[2])

*/
// =========================================== Array Operations ===========


/*
pop()
push()
indexOf()
includes()
forEach() = uses function as argument 
map() = uses function as argument 



⭐ forEach()
⭐ map()
⭐ filter()
⭐ find()
⭐ reduce()
⭐ some()
⭐ every()

 */

/*
let fruits: string[] = [
    "Apple",
    "Banana"
];

fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits)
console.log(fruits.length) 

//indexOf() , includes() 
let idx : number = fruits.indexOf("Apple")
console.log(idx) //0
console.log(fruits.includes("Apple")); // true

//forEach
students.forEach(student=>
    console.log(student)
)
// Map
let marks = [80, 90, 95];
let result = marks.map(mark =>
    mark+5
)
console.log(result);
*/


// ======================================== TUPLES ======================== 
/*
A Tuple is a special type of array where:

    The number of elements is fixed.
    The type of each element is fixed.
    The order matters.

    Syntax:
    let variableName: [type1, type2, type3];

    ex: 
    let student: [string, number];

    let employee : [number,string,boolean] = [101,"Revanth",true]
    console.log(employee)
*/


// ===================================== ENUMS ============================== 
/*
Enums are used to represent a fixed set of named constants.
An Enum (Enumeration) is a way to group related constant values under one name.

enum EnumName {
    Value1,
    Value2,
    Value3

}

========= String Enums ======

enum Role {

    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Role.Admin);
*/

/*

enum Color{
    red="Red",
    blue="Blue",
    yellow = "Yellow"
}
console.log(Color)
console.log(Color.red)

let favouriteColor: Color = Color.blue;
console.log(favouriteColor);

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
console.log(Role.Admin);


enum UserRole{
    Admin = "Admin",
    User = "User"
}
let role= UserRole.Admin 
console.log(role)
*/

// =============================== FUNCTIONS ===========================
/*
A function is a reusable block of code that performs a specific task.
*/
// Arrow functions 
/*
const square = (num:number):number => num *num 
console.log(square(10))

*/


// =============================================  Objects ======================== 

// An object is a collection of related data stored as key-value pairs.

/*

let student1:any = {
    name:"Revanth",
    age:21,
    location:"Hyderabad",
    mail:"reva@gmail.com",
    fees :100000
}

console.log(student1.fees)
student1.fees = 200000
console.log(student1.fees)
console.log(student1["location"])
student1.employed = true

console.log(student1)
*/

// ============================== CLASS ==============================
// A class is  a bluprint used to create an object 
// OBJECT : Real implementation of class(blueprint) is called an object 
// A class does not store actual data.
// Objects store the data.


/*
class Student {
    name = "Revanth";
    age = 21 ;
    company ="Kalgudi"
}
const student = new Student()
console.log(student)
console.log(student.company)


class Employee {
    empId =0;
    name="";
    salary = 0
}

const emp1 = new Employee() 
emp1.empId = 101
emp1.name="Revanth"
emp1.salary =20000


const emp2 = new Employee() 
emp2.empId = 102
emp2.name="Kumar"
emp2.salary =25000

const emp3 = new Employee() 
emp3.empId = 103
emp3.name="Mani"
emp2.salary =27000

console.log(emp1)
console.log(emp2)
console.log(emp3)

*/

// ======================================= Constructor ======================== 
/*
A constructor is a special method that runs automatically when an object is created.

You don't call it yourself.
*/




// Learning Approach for a class

/*
class Student {
    name : string ;
    age : number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
}
 // Professional Approach
class Employee{
    constructor(
        public name:string,
        public age :number 
    ){

    }
}


const s1 = new Student("Revanth",21)
console.log(s1)

const emp = new Employee("Kumar",22)
console.log(emp)

*/

// ==================================== Access Modifiers ======================== 
/*
    Access modifiers control who can access a property or method of a class 

    There are three access modifiers:
        public (default)
        private
        protected

                       Accessible From

--------------------------------------------
Modifier      Class   Child Class   Outside
--------------------------------------------
public         ✅        ✅          ✅
private        ✅        ❌          ❌
protected      ✅        ✅          ❌
--------------------------------------------

*/

/*
// Private 

class Employee{
    constructor( private salary:number){}
}

const em = new Employee(50000)
console.log(em)
console.log(em.salary)
*/


// Inheritance

/*
class Person{
    name : string ="revanth";
    age:number =21
}

class Student extends Person {
    branch : string = "CSD"
}
const student = new Student()
console.log(student)

// Constructor in Inheritance (super())


class Animal {
    constructor(
        public name:string
    ){

    }
}

class Dog extends Animal{
    constructor(
        name : string,
        public sound: string 
    ){
        super(name)
        
    }
    displaySound():void{
        console.log(this.name + " is doing sound "+this.sound)
    }
}

const a1 = new Dog("Dog","bow bow")
a1.displaySound()

*/

// ============================== Interfaces ================================== 
/*
An Interface is a blueprint that defines the structure (shape) of an object.

It tells TypeScript:

    "Every object of this type must contain these properties."

Unlike a class, an interface does not create objects.

It only describes what an object should look like.


    SYNTAX:
        interface InterfaceName {

            property: type;

        }

=================== Difference b/w Interface vs Class =========================
| Interface                  | Class                       |
| -------------------------- | --------------------------- |
| Defines structure          | Creates objects             |
| No constructor             | Can have constructors       |
| No object creation         | Creates objects using `new` |
| No implementation (mostly) | Contains implementation     |
| Used for type checking     | Used for object creation    |


*/

/*

interface Employee{
    id:number;
    name:string;
    salary:number

}

const emp1:Employee = {
    id:101,
    name:"Revanth",
    salary:500000

}

console.log(emp1.name)
console.log(emp1.id)
console.log(emp1.salary) 

console.log(emp1)

*/

// ============================================ Interface Implementation ===========
   /* 
    An interface defines what a class must have.

    The keyword implements tells a class:

    "You must follow all the rules defined in this interface."

*/

/*
interface Employee {
    name : string;
    salary :number;
    work():void 
    inHandsalary(actualSalary:number,deductions:number):number;
}

class Developer implements Employee{
    
    constructor(
        public name:string,
        public salary : number,
        
    ){}
    work():void{
            console.log("Writing the code")
        }
    inHandsalary(salary:number,deductions:number=50000):number{
        return salary - deductions
    }


}

const dev = new Developer("Revanth",500000)
console.log(dev.name)
console.log(dev.salary)
dev.work()
console.log(dev.inHandsalary(dev.salary))
*/

// ====================================== Interface Inheritance (extends) =========================
/*
One interface can inherit all the properties and methods of another interface.

Instead of rewriting the same properties, you reuse them.

*/

/*
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    branch: string;
}

const student: Student = {
    name: "Revanth",
    age: 21,
    branch: "CSE"
};

console.log(student);

// ============================ Multiple Interface Inheritance ===================
interface PersonInfo {
    name: string;
}

interface EmployeeInfo {
    salary: number;
}

interface DeveloperInfo extends PersonInfo, EmployeeInfo {
    language: string;
}

const dev: DeveloperInfo = {
    name: "Revanth",
    salary: 100000,
    language: "TypeScript"
};

console.log(dev)

*/

