
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
    res.send('POST transactions')

}


// @desc Delete all transactions 
// @route DELETE  /api/v1/transactions
// @access Public

exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')

}