import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const CardHome = ({title, text, imgPath}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgPath} />
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