import React from 'react';
import Banner from './Banner';
import Catagory from '../Catagory/Catagory';
import Banner2 from './Banner2';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured';
import Testimonials from '../PopularMenu/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Restaurent || Home</title>
       
      </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Banner2></Banner2>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;