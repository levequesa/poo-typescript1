var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am " + this.name);
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am " + this.age + " years old");
    };
    return Person;
}());
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 30);
console.log("----- Personne 1 : ");
person1.tellMyName();
person1.tellMyAge();
console.log("----- Personne 2 : ");
person2.tellMyName();
person2.tellMyAge();
