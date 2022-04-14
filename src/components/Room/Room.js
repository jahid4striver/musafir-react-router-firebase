import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const {name, price, description, img}= room;
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>
            <Card className='w-100' style={{ height: '36rem' }}>
            <Card.Img  variant="top" className='w-100 h-75' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <p>Price: ${price} Per Day</p>
                <Link style={{backgroundColor:'tomato', color: 'white', border:'2px solid tomato'}} className='btn btn-lg' to='/booking'>Book Now</Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Room;