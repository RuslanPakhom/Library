class Library{
    index = 0
    constructor(myLibrary){
        this.myLibrary = myLibrary
    }
}

class Book{
    constructor(title, author, year, pages, language, isbn, isread, id){
        this.title = title
        this.author = author
        this.year = year
        this.pages = pages
        this.language = language
        this.isbn = isbn
        this.isread = isread
        this.id = id;
    }
}

class View{
    constructor(){
    this.lib = document.querySelector(".library")
    this.addBtn = document.getElementById("add-book")
    this.library = new Library( [] )
    this.init();
    }

    removeBook (e){
        const item = e.target.parentNode
        const itemId = item.getAttribute("data-id")
        this.library.myLibrary.splice(itemId,1,null)
        item.remove()
    
    }

    toggleReadStatus(e){
        const itemId = Number(e.target.parentNode.getAttribute("data-id"))
        e.target.parentNode.classList.toggle("read")
        this.library.myLibrary[itemId].isread = !this.library.myLibrary[itemId].isread
    }

    addButton(){
        this.addBtn.addEventListener('click', () => {
            const title = document.getElementById("title").value
            const author = document.getElementById("author").value
            const year = document.getElementById("year").value
            const pages = document.getElementById("pages").value
            const language = document.getElementById("language").value
            const isbn = document.getElementById("isbn").value
            const isread = false
            const newBook = new Book(title,author,year,pages,language,isbn,isread,this.library.index++);
            this.addBookCard(newBook)
        })
    }
    addBookCard( book ){
        this.library.myLibrary.push(book)
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
        readBtn.addEventListener('click', this.toggleReadStatus.bind(this))
        bookDiv.appendChild(readBtn)       
    
        const removeButton = document.createElement('button')
        removeButton.id = "remove-btn"
        removeButton.textContent = "×"
        removeButton.addEventListener('click', this.removeBook.bind(this))
        bookDiv.appendChild(removeButton)
    
        this.lib.appendChild(bookDiv)
    
    }
    
    renderLibrary(){
    
        this.lib.innerHTML = '';
        this.library.myLibrary.forEach( book => {
    
            this.addBookCard(book)
    
            
        })

    }



    initModal(){
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
    }

    init(){
        this.addButton()
        this.initModal()
    }
}


const view = new View();




