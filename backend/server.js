const express = require('express');
const app = express();

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

// routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});