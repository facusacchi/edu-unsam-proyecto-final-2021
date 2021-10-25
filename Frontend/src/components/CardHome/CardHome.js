import React from 'react';
import { Card } from 'react-bootstrap';
import './cardHome.css';

const CardHome = ({title, text, imgPath}) => {

    return(
        <Card className='home-card' style={{ width: '18rem' }}>
            <Card.Img className='img' variant="top" src={imgPath} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardHome;