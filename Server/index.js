import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3045;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/generate', async (req, res) => {
  const queryInput = req.body.queryDescription;
  try {
    const result = await generate(queryInput);
    res.status(200).json({ response: result });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error, Please Try Again');
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
