/////////////////////////////////////////////////////////////////////////////////////////////////////
// These are classes (sort of an example or template to be reused many other times)
// 
// class Person {
//     constructor(name) {
//         this._name = name;
//     }
//     walk() {
//         return `${this._name} está andando.`
//     }
// }
// let person = new Person('Pedro')
// console.log(person.walk())

// class Student {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
// }
// let student = new Student('John Wayne', 32)
// console.log(student._name, student._age)

/////////////////////////////////////////////////////////////////////////////////////////////////////
// This is an Object/

// const Book = {
//     name: 'Angular',
//     publisher: 'Bookshops',
//     pages: 290,
//     launching: function() {
//         console.log('The publishers recommend the book called ' + this.name + '!')
//     }
// }
// Book.launching()

/////////////////////////////////////////////////////////////////////////////////////////////////////
// This is a Function that works as a 'class'

// const Book1 = function(bookName, bookPublisher, bookPages) {
//     gName = bookName,
//     gPublisher = bookPublisher,
//     gPages = bookPages

//     this.getName = function() {
//         return gName
//     }
//     this.getPublisher = function() {
//         return gPublisher
//     }
//     this.getPages = function() {
//         return gPages
//     }
// }
// const GraphQL = new Book1('GraphQL', 'Bookhaus', 312)
// console.log('Book name:', GraphQL.getName())
// console.log('Publisher:', GraphQL.getPublisher())
// console.log('Pages:', GraphQL.getPages())

// This is a class formated out of a previous function
class Book2 {
    constructor(bookName2, bookPublisher2, bookPages2) {
        this.bookName2 = bookName2,
        this.bookPublisher2 = bookPublisher2,
        this.bookPages2 = bookPages2;
        }
        launchTitle(){
            console.log(`Title: ${this.bookName2}`)
        }
        describeTitle(){
            console.log(`${this.bookName2} is a book from ${this.bookPublisher2} publishing house and contains ${this.bookPages2} pages.`)
        }
}

const NodeJS = new Book2('First steps with NodeJS', 'Bookmakers', 432)
NodeJS.launchTitle()
NodeJS.describeTitle()

class BookColection extends Book2 {
    constructor(bookName2, colectionName){
        super(bookName2);
        this.colectionName = colectionName
    }
    describeColection(){
        console.log(`The book ${this.bookName2} is part of the colection ${this.colectionName}`)
    }
}
const Logic = new BookColection('Programming Logic', 'Start Programming')
Logic.describeColection()