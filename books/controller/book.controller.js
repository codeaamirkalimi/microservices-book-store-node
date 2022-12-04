const Book = require("./../model/Book");
const bookFactory = require("./../factory/book.factory");


exports.addBook = async function (req, res) {
    try {
        const { title, author, numberPages, publisher} = req.body;
        console.log(req.body);
        const newBook = new Book({title, author, numberPages, publisher});
        console.log(newBook);
        await newBook.save();
        res.send('New Book added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getBooks = async function (req, res) {
    try {
        console.log("RUNNING");
        let books = await Book.find();
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getBookById = async function (req, res) {
    try {
        let { id } = req.params;
        let book = await Book.findOne({_id: id});
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.deleteBookById = async function (req, res) {
    try {
        const { id } = req.params;
        let book = await Book.findOneAndDelete({_id: id});
        console.log(book);
        res.status.send("Book deleted successfully!");
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.seedFakeBook = async function (req, res) {
    try {
        const { generateBooks } = req.params;
        for (let i = 0; i <= generateBooks; i++) {
            const books = await bookFactory.generateBookFactory();
            const newBook = new Book(books);
            await newBook.save();
        }
        res.send('Fake Book added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}