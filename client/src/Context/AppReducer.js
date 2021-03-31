// reducer --> how we specify the app state changes in respond to certain action to our context


export default (state, action) => {

    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                // transactions were fetched
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)

            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]

            }

        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}