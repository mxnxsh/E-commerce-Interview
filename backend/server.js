import express from 'express';
import dotenv from 'dotenv';
import './db/connect.js';

import productRouter from './routes/productRouter.js'
// import userRouter from './routes/userRouter.js'
// import orderRouter from './routes/orderRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productRouter);
// app.use('/api/users', userRouter);
// app.use('/api/orders', orderRouter);
// app.get('/api/config/paypal', (req, res) => {
// res.send(process.env.PAYPAL_CLIENT_ID||'sb')
// })
app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is connected on http://localhost:${PORT}`);
});