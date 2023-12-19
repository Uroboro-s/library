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
}

export  {Library};