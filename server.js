const path = require('path')


// common js module, react --> ES2016 module
const express = require('express');
// dotenv used to get the variable from config file
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

const transactions = require('./routes/transactions.js')

const app = express();


// border parser middleware 
app.use(express.json())


if (process.env.NODE_ENV === 'development') {
    /*  [0] GET /api/v1/transactions 200 285.382 ms - 801
     [0] GET /api/v1/transactions 304 276.854 ms - - */
    app.use(morgan('dev'))

}
app.use('/api/v1/transactions', transactions)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

}

/* app.get('/', (req, res) => res.send('Blabla')) */

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))




