class Person {
    private name: string;
    private age: number;

    constructor (name: string ,age: number){
        this.name=name;
        this.age=age;
    }

    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }
}

const person1 = new Person ("John" ,  40 );
const person2 = new Person ("Mary" , 30);

console.log(`----- Personne 1 : `)
person1.tellMyName();
person1.tellMyAge();
console.log(`----- Personne 2 : `)
person2.tellMyName();
person2.tellMyAge();