const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// email storage filepath
const EMAILS_FILE = path.join(__dirname, 'emails.json');

// endpoint to handle email subscriptions
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  // validation
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // read the current emails
  fs.readFile(EMAILS_FILE, (err, data) => {
    if (err && err.code === 'ENOENT') {
      // first subscription
      return fs.writeFile(EMAILS_FILE, JSON.stringify([email]), (err) => {
        if (err) throw err;
        res.json({ message: 'Subscription successful' });
      });
    } else if (err) {
      throw err;
    }

    // add new email to the list
    const emails = JSON.parse(data);
    emails.push(email);

    fs.writeFile(EMAILS_FILE, JSON.stringify(emails), (err) => {
      if (err) throw err;
      res.json({ message: 'Subscription successful' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
