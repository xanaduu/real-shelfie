require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );


massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.error(err));

app.get('/api/shelf/:id', controller.getBins);
app.get('/api/bin/:id', controller.getProduct);
app.post('/api/bin/:id', controller.newProduct);
app.put('/api/bin/:id', controller.editProduct);
app.delete('/api/bin/:id', controller.deleteProduct);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('We up: ' + port));
