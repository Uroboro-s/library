let myLibrary = [];

class Library {
    getLibrary() {
        return myLibrary;
    }
    length() {
        return myLibrary.length;
    }
    addBook(book) {
        myLibrary.push(book);
    }
    removeBook(index) {
        myLibrary.splice(index, 1);
    }
    toggleStatus(index) {
        if(myLibrary[index].read)
            myLibrary[index].read = false;
        else
            myLibrary[index].read = true;
    }
}

export  {Library};