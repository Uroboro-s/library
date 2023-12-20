
import { myLibrary, removeBook, toggleStatus } from "./main.js";

//displays modal when '+add book' button is clicked
function onAddBook()
{
    const modal=document.querySelector('.modal-container');
    const overlay=document.querySelector('.overlay');   
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}


/*Functioning of clode modal window button
,,,also clears all data in form when window is closed */
function onClose()
{
    const modal=document.querySelector('.modal-container');
    const overlay=document.querySelector('.overlay');   
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

/*Function to append the book div in the grid(soon to be),,,
,,handles all sub-elements required in the book div
,,esentially controls display of book div */
function displayBook()
{
    const div = document.createElement('div');
    div.classList = "books";

    const book = myLibrary.getLibrary()[myLibrary.length()-1];

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

    statusButtons[myLibrary.length()-1].addEventListener('click', (event) => {toggleStatus(event); toggleStatusDisplay(event)});
    removeButtons[myLibrary.length()-1].addEventListener('click', (event) => {removeBook(event); removeBookDisplay(event)});
}

//function to remove the book element when remove button is clicked
 function removeBookDisplay(event)
 {
    const removeButton = event.target;
    removeButton.parentNode.remove();     
 }

 //function to change display of read/not read status 
 function toggleStatusDisplay(event) {
    const toggleButton = event.target;

    if(toggleButton.innerHTML == "Read")
    {
        toggleButton.innerHTML="Not read";
        toggleButton.classList="status-button unread-mode";
    }
    else
    {
        toggleButton.innerHTML="Read";
        toggleButton.classList="status-button read-mode";
    }
 }

export {onAddBook, onClose, displayBook};