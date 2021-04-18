
// const bookApi = "http://localhost:4000/";
const bookApi = process.env.NODE_ENV === 'production'? 'herokuString': 'http://localhost:4000/'
async function serverCall() {
    try {
        return await fetch(bookApi)
            .then((res) => { return res.json() })
            .then((result) => { return result.message })
    }
    catch (error) { }
}

async function getAllBooks() {
    try {
        return await fetch(bookApi + "books")
            .then(res => { return res.json() })
            .then(result => { return result.data })
    }

    catch (error) {
        console.log(error);
    }
}
async function postBook(newBook) {
    try{
        return await fetch(bookApi + 'books',{method:"POST", body: JSON.stringify(newBook) })
.then(res=>{return res.json()})
    }
catch(error){console.log(error);}
}
export {
    serverCall,
    getAllBooks,
    postBook
}