const Customer = require("../model/Customer");
const customerFactory = require("./../factory/customer.factory");

exports.newCustomer = async function (req, res) {
    try {
        const { name, age, address} = req.body;
        const newCustomer = new Customer({name, age, address});
        await newCustomer.save();
        res.send('New Customer added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getCustomers = async function (req, res) {
    try {
        console.log("RUNNING");
        let customers = await Customer.find();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.getCustomerById = async function (req, res) {
    try {
        let { id } = req.params;
        let customers = await Customer.findOne({_id: id});
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.deleteCustomerById = async function (req, res) {
    try {
        const { id } = req.params;
        await Customer.findOneAndDelete({_id: id});
        res.status.send("Customer deleted successfully!");
    } catch (error) {
        res.status(500).send(error.data);
    }
}

exports.seedFakeCustomer = async function (req, res) {
    try {
        const { generateCustomers } = req.params;
        for (let i = 0; i <= generateCustomers; i++) {
            const customers = await customerFactory.generateCustomerFactory();
            const newCustomer = new Customer(customers);
            await newCustomer.save();
        }
        res.send('Fake Customers added successfully!')
    } catch (error) {
        res.status(500).send(error.data);
    }
}