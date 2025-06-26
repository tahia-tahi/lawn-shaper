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

            <div className="py-30 px-4 md:px-16 bg-white">
                <Fade direction='down' duration={600} triggerOnce><h1 className="text-4xl text-primary font-bold text-center mb-10">Trending Tips</h1></Fade>
                <Fade direction='up' duration={600} triggerOnce>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

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