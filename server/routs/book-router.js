const bookRouter = require('express').Router();
const BookCtrl = require("../controllers/book-ctrl");

bookRouter.post('/', BookCtrl.createNewBook)
bookRouter.get('/', BookCtrl.getAllBooks)
bookRouter.get('/id/:id', BookCtrl.getBookById)
bookRouter.get('/name/:name', BookCtrl.getBookByName)
bookRouter.delete('/:id', BookCtrl.deleteBookById)
bookRouter.put('/:id', BookCtrl.updateBookById)
module.exports = bookRouter;