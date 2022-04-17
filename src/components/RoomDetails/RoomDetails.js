import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Room from '../Room/Room';

const RoomDetails = () => {
    const {roomId}= useParams();
    const allRooms= useData('https://raw.githubusercontent.com/jahid4striver/musafir-react-router-firebase/main/public/rooms.json')
    const currentRooms= allRooms[roomId];
    

    return (
        <div>
          
            <Card className='w-75 mx-auto' style={{ height: '60rem' }}>
                <Card.Img variant="top" className='w-100 h-75' src={currentRooms?.img} />
                <Card.Body>
                    <Card.Title>{currentRooms?.name}</Card.Title>
                    <Card.Text>
                        {currentRooms?.description}
                    </Card.Text>
                    <p>Price: ${currentRooms?.price} Per Day</p>
            <Link style={{ backgroundColor: 'tomato', color: 'white', border: '2px solid tomato' }} className='btn btn-lg my-5' to='/booking'>CheckOut</Link>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default RoomDetails;