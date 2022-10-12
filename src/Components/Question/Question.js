import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

const Question = ({ questiones }) => {
    console.log(questiones)
    const { question,options } = questiones;
    return (
        <div >
            <p>{question}</p>
            {/* <p>{options}</p> */}
         

        </div>
    );
};

export default Question;