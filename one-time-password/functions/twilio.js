const twilio = require('twilio');

const accountSid = 'AC055f01de9e668a4982fcc8f8a1c0b316';
const authToken = '50d06d60a42d5cf20d99457c9fb5a527';

module.exports = new twilio.Twilio(accountSid, authToken); 