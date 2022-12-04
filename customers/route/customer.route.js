const express = require("express");
const router = express.Router();

const customerController = require("../controller/customer.controller");

router.get('/seed/fake/customer/:generateCustomers', customerController.seedFakeCustomer);
router.post('/new/customer', customerController.newCustomer);
router.get('/get/customers', customerController.getCustomers);
router.get('/get/customer/:id', customerController.getCustomerById);
router.delete('/delete/customer/:id', customerController.deleteCustomerById);

module.exports = router;