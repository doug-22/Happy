import express from 'express';

const app = express();

app.use(express());

app.get('/users', (request, response) => {
  return response.json({message: 'Hello World'});
});

app.listen(3333);