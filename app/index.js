import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// middleware
// main page GET
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

app.listen(3000, () => {
  console.log('server is running');
});
