require('dotenv').config();

const express = require('express'),
	path = require('path'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4000;

//app.use('/api', routes.main);
app.use('/api/accounts', routes.account);
app.use('/api/interviews', routes.interviews);
//app.use('/api/reviews', routes.reviews);
// app.use('/api/salaries', routes.salaries);

app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.listen(port, () => console.log(`Server started on port ${port}`));