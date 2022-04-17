import React from 'react';
import useData from '../../Hooks/useData';
import Room from '../Room/Room';

const Rooms = () => {
    const rooms= useData('rooms.json')
    return (
        <div className='container'>
            <h2 style={{color:'tomato', display:'inline', borderBottom: '5px solid tomato'}} className='my-5'>Our Hotel Rooms</h2>
            <div className='row'>
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