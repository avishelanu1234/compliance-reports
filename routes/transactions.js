const express = require('express');
const Joi = require('joi');

const router = express.Router();

// Schema for validation
const transactionSchema = Joi.object({
    // Define your schema here
    amount: Joi.number().required(),
    currency: Joi.string().length(3).required(),
});

// GET /transactions route
router.get('/transactions', (req, res) => {
    const { error } = transactionSchema.validate(req.query);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    // Proceed with the transaction logic
    res.send('Transactions fetched successfully.');
});

module.exports = router;