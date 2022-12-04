require("dotenv").config();
const express = require('express');
const customerRoutes = require("./route/customer.route");

// Connect
require('../db/db');

const app = express();
const port = process.env.CUSTOMER_SERVER_PORT || 4000;

app.use(express.json());
app.use("/api/customers", customerRoutes);

app.listen(port, () => {
    console.log(`Customer Service - Up and Running on port ${port}`);
})