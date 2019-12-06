import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index';

mongoose.connect('mongodb://localhost:27017/awareco', {useNewUrlParser: true});

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Hello World!' }));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))