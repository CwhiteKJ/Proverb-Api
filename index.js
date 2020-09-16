const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getProverb = require('./utils/getProverb')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  getProverb().then(result => res.send(result))
})

app.use(function(req, res, next) {
  res.status(404).send("{serial: 0, word: '올바르지 않은 접근입니다.'}");
})

app.listen(3000, () => {
	console.log("API is ready.");
})
