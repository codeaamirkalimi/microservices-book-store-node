require("dotenv").config();
const express = require('express');
const bookRoutes = require("./route/book.route");

// Connect
require('../db/db');

const app = express();
const port = process.env.BOOK_SERVER_PORT || 3000;

app.use(express.json());
app.use("/api/books", bookRoutes);

app.listen(port, () => {
    console.log(`Book Service - Up and Running on port ${port}`);
})