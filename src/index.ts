import express from 'express';

const app = express();
app.get('/', (_, res) => {
  res.send('Hello, World!!' + process.env.NODE_ENVIRONMENT);
});

app.listen(3000, () => console.log('server listening on port: 3000...'));
