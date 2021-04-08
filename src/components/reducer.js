const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADER':
            return { ...state, isLoading: true };
        case 'FETCH_LIST':
            return { ...state, list: action.payload, isLoading: false };
        case 'FETCH_DETAIL':
            return {
                ...state,
                drinkDetails: action.payload,
                isLoading: false,
            };
        case 'SEARCH_DRINK':
            return { ...state, input: action.payload, isLoading: false };
        default:
            throw new Error('No action type found');
    }
};

export default reducer;
