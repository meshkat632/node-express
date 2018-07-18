import path from 'path';
import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();

const assets = express.static(path.join(__dirname, '../'));
//const indexPath = path.join(__dirname, '../index.html');

app.use(assets);
app.use(cors());

app.get('*', router);

export default app;