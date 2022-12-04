const { faker } = require('@faker-js/faker');
const Customer = require("../../customers/model/Customer");
const Book = require("../../books/model/Book");

const customerIds = async () => {
    let customerIds = [];
    let customers = await Customer.find({}, {_id: 1}).lean();
    for(let customer of customers) {
        customerIds.push(customer._id);
    }
    return customerIds;
}

const bookIds = async () => {
    let bookIds = [];
    let books = await Book.find({}, {_id: 1}).lean();
    for(let book of books) {
        bookIds.push(book._id);
    }
    return bookIds;
}

exports.generateOrderFactory = async () => {
    return {
        customerID: faker.helpers.arrayElement(await customerIds()),
        bookID: faker.helpers.arrayElement(await bookIds()),
        initialDate: faker.date.between('2022-12-01T00:00:00.000Z', '2022-12-04T00:00:00.000Z'),
        deliveryDate: faker.date.soon(10, '2022-12-04T00:00:00.000Z')
    };
}