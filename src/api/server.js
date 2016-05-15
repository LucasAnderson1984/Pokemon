import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.options('*', cors());
app.use(cors());
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

app.listen(port, function() { console.log('Magic happens on port ' + port); });
