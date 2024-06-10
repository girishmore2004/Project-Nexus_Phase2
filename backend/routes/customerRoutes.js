const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

router.post('/feedback', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newCustomer = new Customer({ name, email, message });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;