const express = require('express');
const CryptoData = require('../models/CryptoData');
const router = express.Router();

router.get('/deviation', async (req, res) => {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({ error: 'Coin is required' });

    try {
        const records = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100);
        if (records.length === 0) return res.status(404).json({ error: 'No data found for the specified coin' });

        const prices = records.map(record => record.price);
        const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
        const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
        const deviation = Math.sqrt(variance);

        res.json({ deviation: deviation.toFixed(2) });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
