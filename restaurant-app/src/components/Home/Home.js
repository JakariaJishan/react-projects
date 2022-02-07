import React from 'react';
import Contain from '../Container/Contain';
import Products from '../Products/Products';
import RecipeReviewCard from '../ReceipeCardReview/ReceipeCardReview';

const Home = () => {
    return (
        <div style={{
            width:'80%',
            margin:'auto'
        }}>
            <Contain></Contain>
            <Products></Products>
            <RecipeReviewCard/>
        </div>
    );
};

export default Home;