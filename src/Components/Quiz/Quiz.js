import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Quiz = ({ quiz }) => {
    const { name, logo, } = quiz;
  

    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} ></Card.Img>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                <Button><Link to={`/questions`}>Start Quiz</Link></Button>   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;