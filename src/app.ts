// src/app.ts
import express from 'express';
import { convertCurrency } from './controllers/currencyController';  // Update the import

const app = express();

// Define routes
app.get('/convert/:from/:to/:amount', convertCurrency);

export default app;
