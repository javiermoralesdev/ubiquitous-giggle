import express from 'express';

var app = express();

app.get('/', (_, res: express.Response) => {
    res.send('It works!');
});

app.listen(5000, () => {
    console.log(`Server listening on port http://localhost:5000`);
});