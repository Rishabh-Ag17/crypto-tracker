const cron = require('node-cron');
const fetchCryptoData = require('./jobs/fetchCryptoData');

cron.schedule('0 */2 * * *', fetchCryptoData); // Runs every 2 hours
