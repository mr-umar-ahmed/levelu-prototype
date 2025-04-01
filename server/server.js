const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const { PORT } = require('./config/env');
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});