import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({ quiz }) => {
    
    const { name, logo, id } = quiz;

    console.log(quiz)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} ></Card.Img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Button><Link to={`/questions/${id}`}>Start Quiz</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default Quiz;