// config inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();


// forma de ler json / middlewares
app.use(
  express.urlencoded({
    extended: true
  }),
);
app.use(express.json());

// rotas da api
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostrar req
  res.json({ message: 'oi express' });
})

// entregar porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apimatheusbattistitube.4ulor.mongodb.net/bancodaapi?retryWrites=true&w=majority`
)
  .then(() => {
    console.log('Conectamos ao mongoDB');
    app.listen(3000);
  })
  .catch((err) => console.log(err))

// mongodb+srv://APIdb:8BFwmJoWNzqeUXam@apimatheusbattistitube.4ulor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// 8BFwmJoWNzqeUXam