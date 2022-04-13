import React from 'react';

const Footer = () => {
    const date= new Date();
    const year= date.getFullYear();
    return (
        <div style={{backgroundColor:'tomato', color:'white', height:'150px',  display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h5> &copy; Copyright Musafir {year}</h5>
        </div>
    );
};

export default Footer;