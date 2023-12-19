
import {Library} from "./library.js";
import { onAddBook, onClose, displayBook } from "./display.js";

/*array data structure that stores all the book object entered */


const myLibrary = new Library();

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


/*modal and overlay functioning */
const button=document.querySelector('#btn');
button.addEventListener('click', onAddBook);

const close=document.querySelector('#close');
close.addEventListener('click', onClose);

const submit=document.querySelector('#submit');
submit.addEventListener('click', onSubmit);




/*submit button functioning */


function onSubmit(event)
{
    
    const title=document.querySelector('#title');
    const author=document.querySelector('#author');
    const pages=document.querySelector('#pages');
    const status=document.querySelector('#status');
    
    const book = new Book(title.value , author.value, pages.value, status.checked);
    
    myLibrary.addBook(book);
    //console.log(myLibrary.getLibrary());
    displayBook(); 
    event.preventDefault();

}

function removeBook(event) {
    const removeButton = event.target;
    let title = (removeButton.parentNode.children[0]).textContent;
    
 
    for(let i=0; i<myLibrary.length(); i++)
    {
        console.log("here 1");
         if(myLibrary.getLibrary()[i].title == title)
         {
            console.log("here");
            //console.log(myLibrary);
            console.log(myLibrary[i]);
            myLibrary.removeBook(i, 1);
            //console.log(myLibrary);
         }
    }
}





 /*function to create toggle working of read/not read status */   
function toggleStatus(event)
{
    console.log(event.target);
    const toggleButton = event.target;
    console.log(toggleButton)
    //console.log(Library.getLibrary());
    if(toggleButton.innerHTML == "Read")
        {
            toggleButton.innerHTML="Not read";
            toggleButton.classList="status-button-unread-mode";
        }
    else
        {
            toggleButton.innerHTML="Read";
            toggleButton.classList="status-button-read-mode";
        }
   
}







export {myLibrary, removeBook};

/*Functioning of clode modal window button
,,,also clears all data in form when window is closed */



