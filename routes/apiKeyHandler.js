const express = require('express');
const router = express.Router();
const data = require('../apiKeys');

let apiKeys = data;

//GET all API keys
router.get('/', (req, res) => {
  res.json(apiKeys);
});

//POST a new API key
router.post('/', (req, res) => {
  const newApiKey = req.body.apiKey;
  apiKeys.push(newApiKey);

  res.status(201).json(apiKeys);
});

//DELETE an API key
router.delete('/:apiKey', (req, res) => {
  const apiKey = req.params.apiKey;
  const foundApiKey = apiKeys.find((i) => i === apiKey);

  if (!foundApiKey) {
    return res.status(404).json({
      message: 'No API key was found, and therefore it cannot be deleted',
    });
  }

  const newApiKeys = apiKeys.filter((i) => i !== apiKey);
  apiKeys = newApiKeys;

  res.status(204).json({ message: 'API key successfully deleted' });
});

module.exports = router;
