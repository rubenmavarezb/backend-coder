"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var User = /** @class */ (function () {
    function User(name, lastname, book, pet) {
        this.name = name;
        this.lastname = lastname;
        this.book = book;
        this.pet = pet;
    }
    User.prototype.getFullName = function () {
        return "Your name is " + this.name + " and last name " + this.lastname;
    };
    User.prototype.addPet = function (mascot) {
        this.pet = __spreadArrays(this.pet, [mascot]);
    };
    User.prototype.getPet = function () {
        return "You have " + this.pet.length + " pets";
    };
    User.prototype.addBook = function (author, book) {
        this.book = __spreadArrays(this.book, [{ author: author, book: book }]);
    };
    User.prototype.getBook = function () {
        var bookTitles = this.book.map(function (title) { return title.book; });
        return bookTitles;
    };
    return User;
}());
var books = [
    {
        author: "John Katzenback",
        book: "The Psicoanalist"
    },
    {
        author: "Gabriel García Márquez",
        book: "100 años de soledad"
    }
];
var pets = ['Farru the dog', 'Misu the cat'];
var user = new User('Ruben', 'Mavarez', books, pets);
console.log(user);
console.log(user.getFullName());
user.addPet('Mickey the mouse');
console.log(user.getPet());
user.addBook('Shakespeare', 'Romeo & Juliet');
console.log(user.getBook());
