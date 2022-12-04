require("dotenv").config();
const express = require('express');
const orderRoutes = require("./route/order.route");

// Connect
require('../db/db');

const app = express();
const port = process.env.ORDER_SERVER_PORT || 9000;

app.use(express.json());
app.use("/api/orders", orderRoutes);

app.listen(port, () => {
    console.log(`Order Service - Up and Running on port ${port}`);
})