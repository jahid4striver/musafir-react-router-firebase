import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Room from '../Room/Room';

const RoomDetails = () => {
    const {roomId}= useParams();
    const allRooms= useData('https://raw.githubusercontent.com/jahid4striver/musafir-react-router-firebase/main/public/rooms.json')
    // const currentRooms= allRooms.roomId;
    console.log(allRooms[roomId]?.name);
    return (
        <div>
            <h1>Room Details:{roomId}</h1>
            <h3>{allRooms.length}</h3>
            
        </div>
    );
};

export default RoomDetails;