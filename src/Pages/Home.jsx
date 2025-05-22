import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import TrendingTips from '../Components/TrendingTips';
import Footer from '../Components/Footer';
import ActiveGardeners from "../Components/ActiveGardeners";
import Counter from '../Components/Counter';
import Navbar from '../Components/Navbar';
import Subscribe from '../Components/Subscribe';
import { Fade } from 'react-awesome-reveal';
const Home = () => {

    const tips = useLoaderData();
    console.log(tips);



    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="py-16 px-4 md:px-16 bg-gray-50"> 
                <Fade direction='down'><h1 className="text-3xl text-primary font-bold text-center mb-10">Trending Tips</h1></Fade>
          <Fade direction='up'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
               
                {
                    tips.map(tip => <TrendingTips key={tip.id} tip={tip}></TrendingTips>)
                }

            </div>
            </Fade>  
            </div>
            <ActiveGardeners></ActiveGardeners>
            <Counter></Counter>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default Home;