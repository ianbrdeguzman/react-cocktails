import React, { useContext } from 'react';
import { AppContext } from './context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
    const { list, isLoading } = useContext(AppContext);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='section'>
            {list ? (
                <h2 className='section-title'>cocktails</h2>
            ) : (
                <h2 className='section-title'>
                    no cocktails matched your search criteria
                </h2>
            )}
            <div className='cocktails-center'>
                {list &&
                    list.map((cocktail) => {
                        return (
                            <Cocktail {...cocktail} key={cocktail.idDrink} />
                        );
                    })}
            </div>
        </section>
    );
};

export default CocktailList;
