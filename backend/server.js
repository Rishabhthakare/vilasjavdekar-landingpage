const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/landing_forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contactEntry = new Contact({ name, email, message });
    await contactEntry.save();
    res.json({ message: 'Thank you for contacting us!' });
  } catch (error) {
    res.status(500).json({ message: 'Submission failed.' });
  }
});

app.get('/', (req, res) => {
  res.send('API is Running...');
});

app.listen(5000, () => console.log('Backend server started on http://localhost:5000'));
