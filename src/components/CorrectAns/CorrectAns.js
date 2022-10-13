import React from 'react';

const CorrectAns = ({ answer }) => {
    return (
        <h3 className='texl-xl'>Correct answer is: <p className='text-blue-600'>{answer}</p></h3>
    );
};

export default CorrectAns;