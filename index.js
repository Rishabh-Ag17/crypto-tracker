const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchCryptoData = require('./jobs/fetchCryptoData');
const statsRoutes = require('./routes/stats');
const deviationRoutes = require('./routes/deviation');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cryptoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(console.error);

// Middleware for JSON
app.use(express.json());

// Routes
app.use('/api/stats', statsRoutes);
app.use('/api/deviation', deviationRoutes);

// Cron Job: Fetch Crypto Data Every 2 Hours
cron.schedule('0 */2 * * *', fetchCryptoData);

// Test Fetch Function (Remove After Testing)
fetchCryptoData()
    .then(() => console.log('Crypto data fetched and saved to database (manual test)'))
    .catch(err => console.error('Error fetching crypto data:', err));

// Server Start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
