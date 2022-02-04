const express = require('express');
const cors = require('cors')
const { PORT = 5000 } = process.env;
const mongoose = require('mongoose');
const router = require('./routes/products') 
const app = express();
app.use(cors())
app.use(express.json());

app.use('/', router);

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})