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
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: alchohol,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
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
                    <h2 className='section-title'>{name}</h2>
                    <div className='drink'>
                        <img src={img} alt={name} />
                        <div className='drink-info'>
                            <p>
                                <span className='drink-data'>name :</span>
                                {name}
                            </p>
                            <p>
                                <span className='drink-data'>category :</span>
                                {category}
                            </p>
                            <p>
                                <span className='drink-data'>info :</span>
                                {alchohol}
                            </p>
                            <p>
                                <span className='drink-data'>glass :</span>
                                {glass}
                            </p>
                            <p>
                                <span className='drink-data'>
                                    instructions :
                                </span>
                                {instructions}
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
