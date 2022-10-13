import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSingle from '../QuizSingle/QuizSingle';

const QuizDetails = () => {
    const [ansStatus, setAnsStatus] = useState({correct: 0, wrong: 0});
    const { data } = useLoaderData();
    const { logo, name, questions } = data;
    const { correct, wrong } = ansStatus;

    return (
        <section className='quiz-details md:w-6/12 sm:w-9/12 mx-auto my-24'>
            <div className="container">
                <div className='flex justify-between items-center mb-3 font-semibold sticky top-0 bg-white px-2 py-4 z-10 shadow-md'>
                    <h4 className='text-blue-600'>Correct: {correct}</h4>
                    <h4 className='text-red-600'>Wrong: {wrong}</h4>
                </div>
                <div className='flex items-center mb-5'>
                    <img className='w-12' src={logo} alt="" />
                    <h2 className='xsm:text-4xl text-3xl font-bold text-center ml-3'><span>{name}</span> Quizes</h2>
                </div>
                <div className='quiz-list space-y-5'>
                    {
                        questions.map(question => 
                        <QuizSingle 
                            key={question.id} 
                            quizQuestion={question} 
                            setAnsStatus={setAnsStatus}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default QuizDetails;