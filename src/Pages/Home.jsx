import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import TrendingTips from '../Components/TrendingTips';

const Home = () => {

    const tips = useLoaderData();
    console.log(tips);



    return (
        <div>
            <Banner></Banner>

            <div className="py-16 px-4 md:px-16 bg-gray-50"> 
            <h1 className="text-3xl text-primary font-bold text-center mb-10">Trending Tips</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    tips.map(tip => <TrendingTips key={tip.id} tip={tip}></TrendingTips>)
                }
            </div>
            </div>

            
        </div>
    );
};

export default Home;