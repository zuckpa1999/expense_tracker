
const Transaction = require('../model/Transaction')


// @desc Get all transactions 
// @route GET  /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
    /* res.send('GET transactions') */

    try {
        const transactions = await Transaction.find()
        return res.status(200).json({

            success: true,
            count: transactions.length,
            data: transactions
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

}

// @desc Add all transactions 
// @route POST  /api/v1/transactions
// @access Public

exports.addTransactions = async (req, res, next) => {

    // req.body.amount
    /* res.send('POST transactions') */
    /*    try {
           const { text, amount } = req.body
           const transaction = await Transaction.create(req.body)
   
   
           // 201 - create something and it's successful
           return res.send(201).json({
               success: true,
               data: transaction
           })
       }
       catch (err) {
           if (err.name === 'ValidationError') {
               const messages = Object.values(err.errors).map(val => val.message)
               // client error - 400, client didnt send the expeccted input
               return res.status(400).json({
                   success: false,
                   error: messages
               })
           }
           else {
               return res.status(500).json({
                   success: false,
                   error: 'Server Error'
               })
   
   
   
           }
       } */

    try {

        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)


        // 201 - create something and it's successful
        return res.sendStatus(201).json({
            success: true,
            data: transaction
        })
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            // client error - 400, client didnt send the expeccted input
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })



        }
    }
}

// @desc Delete all transactions 
// @route DELETE  /api/v1/transactions
// @access Public

exports.deleteTransactions = async (req, res, next) => {
    /* res.send('DELETE transactions') */

    try {
        const transaction = await Transaction.findById(req.params.id)

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found"
            })
        }
        await transaction.remove()
        return res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })

    }
}
