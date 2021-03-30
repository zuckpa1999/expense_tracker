const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controller/transactions_controller')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)


router
    .route('/:id')
    .delete(deleteTransactions)

/* router.get('/', (req, res) => res.send('Hello This is from send')) */
module.exports = router