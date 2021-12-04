let myLibrary = []
let index = 0

const lib = document.querySelector(".library")
const addBtn = document.getElementById("add-book")
addBtn.addEventListener('click', () => {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const year = document.getElementById("year").value
    const pages = document.getElementById("pages").value
    const language = document.getElementById("language").value
    const isbn = document.getElementById("isbn").value
    const isread = false
    const newBook = new Book(title,author,year,pages,language,isbn,isread);
    addBookCard(newBook)
})

function Book (title, author, year, pages, language, isbn, isread){
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
    this.language = language
    this.isbn = isbn
    this.isread = isread
    this.id = index++;
    
}

function addBookToLibrary(){

}

function renderLibrary(){
    
    lib.innerHTML = '';
    myLibrary.forEach( book => {

        addBookCard(book)

        
    })
}

function addBookCard( book ){
    myLibrary.push(book)
    let bookKeys = Object.keys(book)
    const bookDiv = document.createElement("div")
    bookDiv.classList.add('book');
    bookDiv.setAttribute("data-id", book.id)

    const title = document.createElement('p')
    title.textContent = `"${book.title}"`
    title.classList.add("title")
    const author = document.createElement('p')
    author.textContent = `${book.author}`
    const pages = document.createElement('p')
    pages.textContent = `${book.pages} pages`
    const year = document.createElement('p')
    year.textContent = `${book.year} year`
    const language = document.createElement('p')
    language.textContent = `${book.language}`
    const isbn = document.createElement('p')
    isbn.classList.add("isbn")
    isbn.textContent = `${book.isbn}`

    bookDiv.appendChild(title)
    bookDiv.appendChild(author) 
    bookDiv.appendChild(pages) 
    bookDiv.appendChild(year) 
    bookDiv.appendChild(language) 
    bookDiv.appendChild(isbn) 

    
    
    const readBtn = document.createElement('button')
    readBtn.id = "read-btn"
    readBtn.textContent = "Change status"
    readBtn.addEventListener('click', toggleReadStatus)
    bookDiv.appendChild(readBtn)       

    const removeButton = document.createElement('button')
    removeButton.id = "remove-btn"
    removeButton.textContent = "×"
    removeButton.addEventListener('click', removeBook)
    bookDiv.appendChild(removeButton)

    lib.appendChild(bookDiv)

}

function removeBook (e){
    const item = e.target.parentNode
    const itemId = item.getAttribute("data-id")
    myLibrary.splice(itemId,1,null)
    item.remove()

}

function toggleReadStatus(e){
    const itemId = Number(e.target.parentNode.getAttribute("data-id"))
    e.target.parentNode.classList.toggle("read")
    myLibrary[itemId].isread = !myLibrary[itemId].isread
}

//const book1 = new Book("Fisrt book", "Pakhomov R.", 2021, 399, "Russian", "210-15", false)
//const book2 = new Book("Second book", "Pakhomov R.", 2019, 19, "Russian", "210-14", true)
//const book3 = new Book("Third book", "Gayanova A.", 1998, 921, "Tatar", "210-11", true)
//const book4 = new Book("Third book", "Gayanova A.", 1998, 921, "Tatar", "210-11", true)



renderLibrary()


const modal = document.getElementById("newbookmodal");
const btn = document.getElementById("newbookbtn");
var xBtn = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => modal.style.display = "block")
xBtn.addEventListener('click', () => modal.style.display="none")
window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = "none"
    }
})

