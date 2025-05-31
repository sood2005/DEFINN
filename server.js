const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/paymentdb'; // Change if needed
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Transaction schema
const transactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['Sent', 'Received'], required: true },
  amount: { type: Number, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// API to get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// API to send money
app.post('/api/send', async (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || !amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid transaction data' });
  }

  try {
    // Create sent transaction
    const sentTransaction = new Transaction({
      type: 'Sent',
      amount,
      from,
      to,
    });
    await sentTransaction.save();

    // Create received transaction for recipient
    const receivedTransaction = new Transaction({
      type: 'Received',
      amount,
      from,
      to,
    });
    await receivedTransaction.save();

    res.json({ message: `Sent $${amount} to ${to}` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process transaction' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
