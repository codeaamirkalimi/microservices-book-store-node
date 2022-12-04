const express = require("express");
const router = express.Router();

const orderController = require("../controller/order.controller");

router.get('/seed/fake/order/:generateOrders', orderController.seedFakeOrder);
router.post('/new/order', orderController.newOrder);
router.get('/get/orders', orderController.getOrders);
router.get('/get/order/:id', orderController.getOrderById);
router.delete('/delete/order/:id', orderController.deleteOrderById);

module.exports = router;