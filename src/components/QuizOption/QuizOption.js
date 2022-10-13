import React, { useState } from 'react';

const QuizOption = ({ option, inputId, name, checkCorrectAns }) => {

    return (
        <div onClick={e => checkCorrectAns(e)} className='flex items-center space-x-2 my-2 p-1 bg-gray-100 hover:bg-gray-300'>
            <input type="radio" id={inputId+name} name={name} />
            <label className='flex-1' htmlFor={inputId+name}>{option}</label>
        </div>
    );
};

export default QuizOption;