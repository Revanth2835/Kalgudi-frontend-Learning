export class Student {

    constructor(
        public name : string,
        public age : number
    ){}
}


export function greet(){
console.log("Hello from Exported File")
}

export const company = "Kalgudi"