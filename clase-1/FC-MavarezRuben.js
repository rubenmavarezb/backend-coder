function User(name, lastname, book, pet) {
    this.name = name;
    this.lastname = lastname;
    this.book = book;
    this.pet = pet;
}

User.prototype.getFullName = function(){
    return `Your name is ${this.name} and last name ${this.lastname}`;
} 

User.prototype.addPet = function(mascot) {
    this.pet = [...this.pet, mascot];
}

User.prototype.getPet = function() {
    return `You have ${this.pet.length} pets`;
} 

User.prototype.addBook = function(author, book) {
    this.book = [...this.book, { author: author, book: book}];
} 

User.prototype.getBook = function() {
   const bookTitles = this.book.map(title => title.book);
   return bookTitles;
}

const books = [
    {
        author: "John Katzenback",
        book: "The Psicoanalist"
    },
    {
        author: "Gabriel García Márquez",
        book: "100 años de soledad"
    }
]

const pets = ['Farru the dog', 'Misu the cat']

const user = new User('Ruben', 'Mavarez', books, pets)

console.log(user);

console.log(user.getFullName());
user.addPet('Mickey the mouse');
console.log(user.getPet());
user.addBook('Shakespeare', 'Romeo & Juliet');
console.log(user.getBook());