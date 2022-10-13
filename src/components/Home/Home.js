import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <Banner />
            <div className="container quiz-container grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-24">
                {
                    data.map(item => <QuizCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Home;