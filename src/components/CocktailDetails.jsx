import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import { AppContext } from './context';
import axios from 'axios';

const CocktailDetails = () => {
    const { id } = useParams();
    const { detailUrl, isLoading, dispatch, drinkDetails } = useContext(
        AppContext
    );
    const {
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
    } = drinkDetails;
    const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
    ];
    useEffect(() => {
        const fetchCocktail = async (url, input) => {
            if (!input) return;
            try {
                dispatch({ type: 'TOGGLE_LOADER' });
                const response = await axios.get(url + input);
                if (response.status >= 400) {
                    throw new Error(response.statusText);
                }
                const { data } = response;
                dispatch({ type: 'FETCH_DETAIL', payload: data.drinks[0] });
            } catch (error) {
                alert(error);
                console.error(error);
            }
        };
        fetchCocktail(detailUrl, id);
    }, [detailUrl, id, dispatch]);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className='section cocktail-section'>
                    <Link to='/react-cocktails/' className='btn btn-primary'>
                        back home
                    </Link>
                    <h2 className='section-title'>{strDrink}</h2>
                    <div className='drink'>
                        <img src={strDrinkThumb} alt={strDrink} />
                        <div className='drink-info'>
                            <p>
                                <span className='drink-data'>name :</span>
                                {strDrink}
                            </p>
                            <p>
                                <span className='drink-data'>category :</span>
                                {strCategory}
                            </p>
                            <p>
                                <span className='drink-data'>info :</span>
                                {strAlcoholic}
                            </p>
                            <p>
                                <span className='drink-data'>glass :</span>
                                {strGlass}
                            </p>
                            <p>
                                <span className='drink-data'>
                                    instructions :
                                </span>
                                {strInstructions}
                            </p>
                            <p>
                                <span className='drink-data'>
                                    ingredients :
                                </span>
                                {ingredients.map((item, index) => {
                                    if (item === null) return null;
                                    return <span key={index}>{item}</span>;
                                })}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CocktailDetails;
