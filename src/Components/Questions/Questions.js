import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {

    const questions = useLoaderData();
    console.log(questions.data.questions)
    const questionsData = questions?.data?.questions;
    return (
        <div>
            <h1>Answer All The Questions Properly.</h1>
            <div className='container d-block'>
                {
                    questionsData.map(questiones => <Question
                        key={questiones.id}
                        questiones={questiones}
                    ></Question>)
                }
            </div>

        </div>

    );
};




export default Questions;