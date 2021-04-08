import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from './reducer';

const AppContext = createContext();

const defaultState = {
    list: [],
    isLoading: true,
    input: '',
    searchUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    detailUrl: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    drinkDetails: {},
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const { searchUrl } = state;

    useEffect(() => {
        const fetchCocktailList = async (url) => {
            try {
                const response = await axios.get(url);
                if (response.status >= 400) {
                    throw new Error(response.statusText);
                }
                const { data } = response;
                dispatch({ type: 'FETCH_LIST', payload: data.drinks });
            } catch (error) {
                alert(error);
                console.error(error);
            }
        };
        fetchCocktailList(searchUrl);
    }, [searchUrl]);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
