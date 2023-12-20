
import {Library} from "./library.js";
import { onAddBook, onClose, displayBook } from "./display.js";

//used to invoke the Library class functions that 
//handle data manipulation
const myLibrary = new Library();


const book = new Book("Throne of Glass" , "Sarah J Maas", "289", "Read");
myLibrary.addBook(book);
displayBook();

/*book constructor
,,used to create objects(books)  */
function Book(title, author, pages, status)
{
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= status;

    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages} pages,
       ${this.read}`)
    }
}


//initial event listeners at the time of webpage loading
const button=document.querySelector('#btn');
button.addEventListener('click', onAddBook);

const close=document.querySelector('#close');
close.addEventListener('click', onClose);

const submit=document.querySelector('#submit');
submit.addEventListener('click', onSubmit);


/*submit button functioning to add book object in data*/
function onSubmit(event)
{
    
    const title=document.querySelector('#title');
    const author=document.querySelector('#author');
    const pages=document.querySelector('#pages');
    const status=document.querySelector('#status');
    
    const book = new Book(title.value , author.value, pages.value, status.checked);
    
    myLibrary.addBook(book);

    displayBook(); 
    event.preventDefault();

}

//function to remove book element/object in data array in library.js
function removeBook(event) {
    const removeButton = event.target;
    let title = (removeButton.parentNode.children[0]).textContent;
 
    for(let i=0; i<myLibrary.length(); i++)
    {
         if(myLibrary.getLibrary()[i].title == title)
            myLibrary.removeBook(i, 1);
    }
}


 /*function to create toggle working of read/not read status in maintained data*/   
function toggleStatus(event)
{

    const toggleButton = event.target;
    let title = (toggleButton.parentNode.children[0]).textContent;

    for(let i=0; i<myLibrary.length(); i++)
    {
         if(myLibrary.getLibrary()[i].title == title)
            myLibrary.toggleStatus(i);
    }
}

export {myLibrary, removeBook, toggleStatus};





