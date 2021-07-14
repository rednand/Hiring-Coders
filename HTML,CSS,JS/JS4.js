class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


read() {
    return `Estou lendo ${this.title}`
}
}

let book = new Book("algoritmos para viver","Brian",500);
let otherBook = new Book("Um exu em Ny","cIDINHA DA Silva",100);

console.log(book.read())

console.log(otherBook.read())


console.log(book,otherBook)


class ITBook extends Book{
    constructor(title,author,pages,technology){
        super(title,author,pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos para vivver","Brian",500, "Algoritmos");


console.log(itBook)


class Person{
    constructor(name){
        this._name = name;
    }

    get name(){ //possibilita acessar os atributos
        return this._name;
    }

    set name(value){ //permite reatribuir outros valores
        this._name = value;
    }
}


let person = new Person("Renan")
person.name = "Re"
console.log(person.name)



