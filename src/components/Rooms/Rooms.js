import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms]= useState([]);

    useEffect(()=>{
        fetch('rooms.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <div className='container'>
            <h2 style={{color:'tomato', display:'inline', borderBottom: '5px solid tomato'}} className='my-5'>Our Hotel Rooms</h2>
            <div className='container row'>
            {
                rooms.map(room=> <Room
                key={room.id}
                room={room}></Room>)
            }
            </div>
        </div>
    );
};

export default Rooms;