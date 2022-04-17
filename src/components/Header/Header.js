import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';

const Header = () => {
    const [user]= useAuthState(auth);

const handleSignOut= ()=>{
    signOut(auth);
}
    return (
        <Navbar className='text-white mb-4' sticky='top' style={{backgroundColor: 'tomato', height: '80px'}}variant="dark">
            <Container>
                <Navbar.Brand href="#home" className=''><h2>Musafir</h2></Navbar.Brand>
                <Nav className="me-5">
                    <CustomLink className='text-decoration-none text-white ms-3 fw-bold' to="/">Home</CustomLink>
                    <CustomLink className='text-decoration-none text-white ms-3 fw-bold' to='/booking'>Booking</CustomLink>
                    <CustomLink className='text-decoration-none text-white ms-3 fw-bold' to='/about'>About</CustomLink>
                    {
                        user? <CustomLink onClick={handleSignOut} className='text-decoration-none text-white ms-3 fw-bold' to='/' >Sign Out</CustomLink> 
                        : <CustomLink  className='text-decoration-none text-white ms-3 fw-bold' to='/login'>Login</CustomLink>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;