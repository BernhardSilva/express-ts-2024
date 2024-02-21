import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import router from './routes';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

//midlewares
app.use(express.json());
app.use(errorHandler);
app.use(morgan('combined'));

//router
app.use('/', router);

app.get('/ping', (req, res) => {
	res.json({ message: 'pong' }).status(200);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
