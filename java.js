// member 1
let books = [
    { id: 1, title: "Zikola land", author: "Amr Abdel Hamid", isBorrowed: false },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isBorrowed: false,
    },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", isBorrowed: false },
  ];
  
  // Function to add a new book to the list
  function addBook(id, title, author) {
    books.push({ id, title, author, isBorrowed: false });
    console.log(`Book added: ${title}`);
  }
  
  // Function to remove a book from the list by its ID
  function removeBook(id) {
    books = books.filter((book) => book.id !== id);
    console.log(`Book removed: ID ${id}`);
  }
  
  // Function to get all available (not borrowed) books
  function listAvailableBooks() {
    return books.filter((book) => !book.isBorrowed);
  }
  
  // member 2
  let borrowed_books_num=0;
  let authors_list=[]
  
  // Function to borrow a book by ID
  function borrow(n) {
    for (b of books) {
      if (b.id == n) {
        if (b.isBorrowed == true) {
          console.log("The Book Is Borrowed");
        } else {
          b.isBorrowed = true;
          borrowed_books_num=borrowed_books_num+1;
          authors_list.push(b.author)
          console.log("Borrowing is Done");
        }
      }
    }
  }
  
  // Function to return a borrowed book by ID
  function returnBook(n) {
    for (b of books) {
      if (b.id == n) {
        if (b.isBorrowed == true) {
          b.isBorrowed = false;
          borrowed_books_num=borrowed_books_num-1;
          console.log("returning is Done");
        } else {
          console.log("the book was already returned");
        }
      }
    }
  }
  
  // Function to list all borrowed books
  function listAllBorrowed() {
    for (b of books) {
      if (b.isBorrowed == true) {
        console.log(b.id);
        console.log(b.title);
      }
    }
  }
  
  // Function to search for a book by title (case insensitive)
  function searchByTitle(title) {
    for (b of books) {
      if (b.title.toLowerCase() == title.toLowerCase()) {
        console.log(b.author);
        console.log(b.id);
        console.log(b.isBorrowed);
        console.log(b.title);
      }
    }
  }
  
  // member 3
  
  function total_books(books) {
    return books.length;
  }
  
  function available_borrowed_books(books,borrowed_books_num) {
    let available = total_books(books) - borrowed_books_num;
  
    return available;
  }
  
  
  function most_popular_author(authors_list /* Will Be Made By Salah */) {
    let countMap = {};
    let mostRepeated = [];
    let maxCount = 0;
  
    for (let i = 0; i < authors_list.length; i++) {
      let author = authors_list[i];
  
      countMap[author] = (countMap[author] || 0) + 1;
  
      if (countMap[author] > maxCount) {
        mostRepeated = [author];
        maxCount = countMap[author];
      } else if (countMap[author] === maxCount) {
        mostRepeated.push(author);
      }
    }
  
    return mostRepeated;
  }
  
  addBook(4, "Fast", "Youssef");
  searchByTitle("fast");
  borrow(4);
  borrow(4);
  borrow(2);
  listAllBorrowed();

  console.log(`The Total Number of Books is: ${total_books(books)}`);
  
  console.log(`Number of Available Books:  ${available_borrowed_books(books,borrowed_books_num)}`);
  console.log(`Number of Borrowed Books:  ${borrowed_books_num}`);
  console.log(`The Most Borrowed Author is: ${most_popular_author(authors_list)}`);