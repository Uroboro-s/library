
import {Library} from "./library.js";

/*array data structure that stores all the book object entered */


const myLibrary = new Library();


/*modal and overlay functioning */
const button=document.querySelector('#btn');
button.addEventListener('click', onAddBook);

const modal=document.querySelector('.modal-container');
const overlay=document.querySelector('.overlay');

const close=document.querySelector('#close');
close.addEventListener('click', onClose);

const submit=document.querySelector('#submit');
submit.addEventListener('click', onSubmit);

function onAddBook()
{
    
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}


/*submit button functioning */


function onSubmit(event)
{
    
    const title=document.querySelector('#title');
    const author=document.querySelector('#author');
    const pages=document.querySelector('#pages');
    const status=document.querySelector('#status');
    
    const book = new Book(title.value , author.value, pages.value, status.checked);
    
    myLibrary.addBook(book);
    console.log(myLibrary.getLibrary());
    displayBook(); 
    event.preventDefault();

}


/*Function to append the book div in the grid(soon to be),,,
,,handles all sub-elements required in the book div
,,esentially controls display of book div */
function displayBook()
{
    const div = document.createElement('div');

    div.classList = "books";

    const book = myLibrary.getLibrary()[myLibrary.length()-1];
    console.log(book);

    let msg="";
    let classOfStatus="";

    if(book.read==false){
        classOfStatus="status-button unread-mode";
        msg="Not read";}
    else{
        msg="Read";
        classOfStatus="status-button read-mode";}
    div.innerHTML=`
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <button type="submit"  class="${classOfStatus}">${msg}</button>
    <button type="submit" class="remove-button" >Remove</button>
    `;
    document.getElementById('page-container').appendChild(div);
    
    const statusButtons = document.querySelectorAll('.status-button');
    const removeButtons = document.querySelectorAll('.remove-button');
    //console.log(statusButtons);
    console.log(removeButtons);
    
    statusButtons[myLibrary.length()].addEventListener('click', (event) => toggleStatus(event));
    removeButtons[myLibrary.length()].addEventListener('click', (event) => removeBook(event));
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


/**function to implement remove button working 
 ,,gets invoked through onclick on all remove buttons*/
function removeBook(event)
{
    console.log(event);
    const removeButton = event.target;
    let title = (removeButton.parentNode.children[0]).textContent;
   

   for(let i=0; i<myLibrary.length; i++)
   {
    
        if(myLibrary[i].title==title)
        {
            console.log(myLibrary);
            console.log(myLibrary[i]);
            myLibrary.splice(i, 1);
            console.log(myLibrary);
        }
   }
   removeButton.parentNode.remove();
   
    
}


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



/*Functioning of clode modal window button
,,,also clears all data in form when window is closed */


function onClose()
{
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
    
    const title=document.querySelector('#title');
    const author=document.querySelector('#author');
    const pages=document.querySelector('#pages');
    const status=document.querySelector('#status');
    title.value="";
    author.value="";
    pages.value="";
    status.checked=false;
}
