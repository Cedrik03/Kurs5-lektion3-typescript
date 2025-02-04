async function fetchFox() {
    const result = await fetch("https://randomfox.ca/floof/");
    const data = await result.json();

    console.log(data.image); 
}

fetchFox();

async function fetchBooks() {
    
    const result = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    const data = await result.json();

    const firstBook = data.docs[0];

    console.log("Ebook access:", firstBook.ebook_access);
    console.log("Title:", firstBook.title);
    console.log("Författare:", firstBook.author_name ? firstBook.author_name[0] : "Okänd");
    console.log("Första publiceringsåret:", firstBook.first_publish_year);
}

fetchBooks();
