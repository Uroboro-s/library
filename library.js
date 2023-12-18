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
}

export  {Library};