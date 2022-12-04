const Order = require("../model/Order");
const mongoose = require("mongoose");
const orderFactory = require("./../factory/order.factory");
const Book = require("../../books/model/Book");


exports.newOrder = async function (req, res) {
    try {
        const { customerID, bookID, initialDate, deliveryDate} = req.body;
        const newOrder = new Order({
            customerID: mongoose.Types.ObjectId(customerID),
            bookID: mongoose.Types.ObjectId(bookID),
            initialDate,
            deliveryDate
        });
        await newOrder.save();
        res.send('New Order added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getOrders = async function (req, res) {
    try {
        console.log("RUNNING");
        let orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getOrderById = async function (req, res) {
    try {
        let { id } = req.params;
        let order = await Order.findOne({_id: id});
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.deleteOrderById = async function (req, res) {
    try {
        const { id } = req.params;
        let order = await Order.findOneAndDelete({_id: id});
        res.status.send("Order deleted successfully!");
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.seedFakeOrder = async function (req, res) {
    try {
        const { generateOrders } = req.params;
        for (let i = 0; i <= generateOrders; i++) {
            const order = await orderFactory.generateOrderFactory();
            const newOrder = new Order(order);
            await newOrder.save();
        }
        res.send('Fake Order added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}