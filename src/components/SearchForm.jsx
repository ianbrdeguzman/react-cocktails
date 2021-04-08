import React, { useContext, useEffect } from 'react';
import { AppContext } from './context';
import axios from 'axios';

const SearchForm = () => {
    const { input, searchUrl, dispatch } = useContext(AppContext);

    const handleInput = (value) => {
        dispatch({ type: 'SEARCH_DRINK', payload: value });
    };

    useEffect(() => {
        const fetchCocktailList = async (url, input) => {
            try {
                const response = await axios.get(url + input);
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
        fetchCocktailList(searchUrl, input);
    }, [input, dispatch, searchUrl]);

    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input
                        onChange={(e) => handleInput(e.target.value)}
                        type='text'
                        name='name'
                        id='name'
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
