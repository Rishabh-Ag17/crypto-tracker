const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchCryptoData = require('./jobs/fetchCryptoData');
const statsRoutes = require('./routes/stats');
const deviationRoutes = require('./routes/deviation');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cryptoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(console.error);

app.use(express.json());

// Routes
app.use('/api/stats', statsRoutes);
app.use('/api/deviation', deviationRoutes);

// Cron Job: Fetch Crypto Data Every 2 Hours
cron.schedule('0 */2 * * *', fetchCryptoData);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
