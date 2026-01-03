require('dotenv').config();

function authenticate(context) {
  const apiKey = context.req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    throw new Error("Unauthorized: Invalid API key");
  }
  return true; // valid request
}

module.exports = { authenticate };
