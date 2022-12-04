const express = require("express");
const router = express.Router();

const bookController = require("../controller/book.controller");

router.get('/seed/fake/book/:generateBooks', bookController.seedFakeBook);
router.post('/add/book', bookController.addBook);
router.get('/get/books', bookController.getBooks);
router.get('/get/book/:id', bookController.getBookById);
router.delete('/delete/book/:id', bookController.deleteBookById);

module.exports = router;