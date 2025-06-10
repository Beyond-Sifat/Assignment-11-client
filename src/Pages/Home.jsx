import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import NearlyExpired from '../Components/NearlyExpired';
import Expired from '../Components/Expired';

const Home = () => {
    const foods = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <NearlyExpired foods={foods}></NearlyExpired>
            <Expired foods={foods}></Expired>
        </div>
    );
};

export default Home;
