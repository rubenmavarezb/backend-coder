class User {
    name: string;
    lastname: string;
    book: {author: string, book: string}[];
    pet: string[]

    constructor(name: string, lastname: string, book:[], pet:[]) {
        this.name = name;
        this.lastname = lastname;
        this.book = book;
        this.pet = pet;
    }
    getFullName() {
        return `Your name is ${this.name} and last name ${this.lastname}`;
    }
    addPet(mascot: string) {
        this.pet = [...this.pet, mascot];
    }
    getPet() {
        return `You have ${this.pet.length} pets`;
    }
    addBook(author: string, book: string) {
        this.book = [...this.book, { author: author, book: book }];
    }
    getBook() {
        const bookTitles = this.book.map((title: any) => title.book);
        return bookTitles;
    }
}

const books: any = [
    {
        author: "John Katzenback",
        book: "The Psicoanalist"
    },
    {
        author: "Gabriel García Márquez",
        book: "100 años de soledad"
    }
]

const pets: any = ['Farru the dog', 'Misu the cat']

const user = new User('Ruben', 'Mavarez', books, pets)

console.log(user);

console.log(user.getFullName());
user.addPet('Mickey the mouse');
console.log(user.getPet());
user.addBook('Shakespeare', 'Romeo & Juliet');
console.log(user.getBook());