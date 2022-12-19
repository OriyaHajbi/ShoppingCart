const dotenv = require('dotenv');
const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

// console.log(result.parsed);

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listen to port ${PORT}`);
});
