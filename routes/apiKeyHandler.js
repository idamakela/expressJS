const express = require('express');
const router = express.Router();
const apiKeys = require('../apiKeys');

let apiKeysArr = apiKeys;

//GET all API keys
router.get('/', (req, res) => {
  res.json(apiKeysArr);
});

//POST a new API key
router.post('/', (req, res) => {
  const newApiKey = req.body.apiKey;
  apiKeysArr.push(newApiKey);

  res.json(apiKeysArr);
});

module.exports = router;
