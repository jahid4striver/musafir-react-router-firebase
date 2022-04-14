import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user]= useAuthState(auth);

const handleSignOut= ()=>{
    signOut(auth);
}
    return (
        <Navbar className='text-white' style={{backgroundColor: 'tomato', height: '80px'}}variant="dark">
            <Container>
                <Navbar.Brand href="#home" className=''><h2>Musafir</h2></Navbar.Brand>
                <Nav className="me-5">
                    <Link className='text-decoration-none text-white ms-3 fw-bold' to="/">Home</Link>
                    <Link className='text-decoration-none text-white ms-3 fw-bold' to='/booking'>Booking</Link>
                    <Link className='text-decoration-none text-white ms-3 fw-bold' to='/about'>About</Link>
                    {
                        user? <Link onClick={handleSignOut} className='text-decoration-none text-white ms-3 fw-bold' to='/' >Sign Out</Link> 
                        : <Link  className='text-decoration-none text-white ms-3 fw-bold' to='/login'>Login</Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;