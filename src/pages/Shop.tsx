import React from 'react';
import Hero from "../component/hero/Hero.tsx";
import Popular from "../component/popular/Popular.tsx";
import Offers from "../component/offers/Offers.tsx";
import NewCollections from "../component/newCollections/NewCollections.tsx";
import NewsLetter from "../component/newsLetter/NewsLetter.tsx";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
};

export default Shop;