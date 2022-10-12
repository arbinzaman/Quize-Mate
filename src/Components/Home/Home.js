import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {

    const quizes = useLoaderData();
    return (
        <div className='container ' >
            <header>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/vectors/man-and-thought-bubble-vector-id1186261767?k=20&m=1186261767&s=612x612&w=0&h=c8-1wXDy51TKJhwrAhR8tSYJXKNAaZhtjsKN-kys51g=" alt="" className='img-fluid'></img>
                    </div>
                    <div className="col-md-6">
                        <h1 className='mt-5'>Test Your Self Today </h1>
                        <p className='mt-5'>Frontend Developers are in demand today. A lot of companies are readily hiring them with attractive salary packages. If you believe you possess the skills to become a frontend developer and wish to make a career in it, then you’re in the right place. This tutorial on Frontend Developer Interview Questions will help you crack your next interview. This Frontend Developer Interview Questions tutorial has put together questions on various languages and frameworks used for frontend development.</p>
                    </div>
                </div>
            </header>
            <section>

            </section>


  


            <div >

                {
                    quizes.data.map(quiz => <Quiz
                        key={quizes.data.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>

    );
};

export default Home;