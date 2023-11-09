class surname {
    constructor() {
        this.surname = "chowdhury";

    }
}
class name extends surname {
    constructor(name) {
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name+" "+this.surname;
    }
}
const name1 = new name("Tajwone");
console.log(name1);
console.log(name1.getFullName());