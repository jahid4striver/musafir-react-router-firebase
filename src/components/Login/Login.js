import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword,user,loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

if (user){
    // navigate('/')
    navigate(from, { replace: true });

}

const handleLogin=e=>{
    e.preventDefault();
    signInWithEmailAndPassword(email,password);

}

    return (
        <div className='my-5 '>
            <h2>Please Login</h2>
            <div className='w-50 mx-auto border border-danger p-5'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <p className='text-start'>Email address</p>
                        <Form.Control onBlur={handleEmail} className='p-3' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <p className='text-start'>Password</p>
                        <Form.Control onBlur={handlePassword} className='p-3' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{ backgroundColor: 'tomato', border: '2px solid tomato', padding: '10px 50px' }} className='btn btn-lg mb-5' type="submit">
                        Login
                    </Button>
                    <p>Dont't Have a Acoount? <Link to='/signup'>Register Now</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;