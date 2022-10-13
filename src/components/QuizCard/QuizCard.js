import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizCard = ({ item }) => {
    const {id, logo, name, total } = item;
    return (
        <div className='quiz-card flex items-center xsm:flex-row flex-col xsm:text-left text-center border p-3 rounded-md bg-blue-100'>
            <img className='w-32' src={logo} alt="" />
            <div className='pl-5'>
                <h3 className='text-3xl font-semibold mb-2'>{name}</h3>
                <h4>Total Quizes: {total}</h4>
                <button className='bg-blue-600 px-8 py-1 text-white font-semibold rounded-full mt-5'>
                    <Link to={`/quiz/${id}`}>Test Now <FontAwesomeIcon icon={faArrowRight} /> </Link>
                </button>
            </div>
        </div>
    );
};

export default QuizCard;