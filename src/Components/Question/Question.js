import React, { useState } from 'react'
import Option from './Options';

const Question = ({ questiones }) => {
    const { question, options, correctAnswer } = questiones;

    const [revealAns, setRevealAns] = useState(false)

    return (
        <div >
            <p>{question}</p>
            <p className='cursor-pointer' onClick={() => setRevealAns(true)}>Eye button</p>

            <form>
                {
                    options.map((t, index) => <Option revealAns={revealAns} c={correctAnswer} index={index} key={index} t={t}></Option>)
                }
            </form>
        </div>
    );
};

export default Question;