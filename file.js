var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getData = function () {
        return "id: ".concat(this.id, " name: ").concat(this.name, " age: ").concat(this.age);
    };
    return Person;
}());
var newPerson = new Person(1, 'Maria', 3);
console.log(newPerson);
