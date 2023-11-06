const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Use CORS and BodyParser for JSON payloads
app.use(cors());
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
  // need to add my db functionality here
  console.log(`Email received: ${req.body.email}`);
  
  // async database operation with a timeout
  setTimeout(() => {
    res.json({ message: 'Thank you for subscribing!' });
  }, 1000);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
