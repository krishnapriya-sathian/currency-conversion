// src/app/app.ts
import express from 'express';

const app = express();

app.get('/hi', (req, res) => {
    res.send('Hello, this is the main route!');
});

export default app;
