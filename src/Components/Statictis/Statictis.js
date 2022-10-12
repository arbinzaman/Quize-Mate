import { Tooltip } from 'recharts';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { CartesianGrid, Line, LineChart,  XAxis, YAxis } from 'recharts';

const Statictis = () => {

    const quizCategories = useLoaderData()
    const quizTypes = quizCategories.data
    console.log(quizTypes);
    return (
        <div className='container mt-5 text-center'>
            <LineChart
                width={350}
                height={250}
                data={quizTypes}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
            </LineChart>
        </div>
    );
};






export default Statictis;