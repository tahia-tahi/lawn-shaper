import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import GardenerCard from '../Components/GardenerCard';

const ExploreGardeners = () => {

    const gardeners = useLoaderData();
    return (
        <div>

            <Navbar></Navbar>

            <div>
                            <h1 className='text-3xl text-primary font-bold text-center mt-20 mb-10'>Explore Gardeners</h1>

                {
                    gardeners.map((gardener)=><GardenerCard key={gardener._id} gardener={gardener}></GardenerCard>)
                }
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default ExploreGardeners;