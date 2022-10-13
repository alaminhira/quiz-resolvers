import React, { useState } from 'react';
import { toast } from 'react-toastify';
import QuizOption from '../QuizOption/QuizOption';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CorrectAns from '../CorrectAns/CorrectAns';

const QuizSingle = ({ quizQuestion, setAnsStatus }) => {
    const [clicked, setClicked] = useState(false);
    const { id, correctAnswer, options, question } = quizQuestion;
    // setAnsStatus(prevAns => console.log(prevAns))

    const checkCorrectAns = (e) => {
        const selectedOpt = e.target.innerText;

        if (!selectedOpt || clicked) return;

        if (selectedOpt === correctAnswer) {
            showAnswerStatus('🟩 Correct Answer!');
            setAnsStatus(prevAns => {
                return { ...prevAns, correct: prevAns.correct + 1 }
            });
        } else {
            showAnswerStatus('🟥 Wrong answer!');
            setAnsStatus(prevAns => {
                return { ...prevAns, wrong: prevAns.wrong + 1 }
            });
        }

        setClicked(true);
    }

    const showAnswerStatus = (message) => {
        toast(message, {
            autoClose: 2000,
        })
    }

    const showCorrectAns = () => {
        toast(<CorrectAns answer={correctAnswer} />);
    }

    return (
        <div className='border p-3 rounded-md'>
            <h3 className='bg-gray-300 p-2 mb-2 text-lg flex justify-between items-center'>
                {question}
                <button onClick={showCorrectAns} className='text-blue-600 ml-5'>
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </h3>
            <div className={`${clicked ? 'select-none pointer-events-none opacity-50' : ''}`}>
                {
                    options.map((opt, idx) =>
                        <QuizOption key={idx}
                            option={opt}
                            inputId={idx}
                            name={id}
                            checkCorrectAns={checkCorrectAns}
                        />)
                }
            </div>
        </div>
    );
};

export default QuizSingle;