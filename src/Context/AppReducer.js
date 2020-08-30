// reducer --> how we specify the app state changes in respond to certain action to our context


export default (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload,...state.transactions]

            }
        default:
            return state;

    }
}