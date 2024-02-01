class Person{
    id:number;
    name: string;
    age:number;
    constructor(id:number,name:string,age:number){
        this.id =id
        this.name = name
        this.age= age
    }
    getData(){
        return `id: ${this.id} name: ${this.name} age: ${this.age}`
    }
}

const newPerson = new Person(1,'Maria',3)
console.log(newPerson)