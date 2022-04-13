import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='my-5 '>
            <h2>Register Account</h2>
            <div className='w-50 mx-auto border border-danger p-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className='text-start'>Your Name</p>
                    <Form.Control className='p-3' type="email" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className='text-start'>Email address</p>
                    <Form.Control className='p-3' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <p className='text-start'>Password</p>
                    <Form.Control className='p-3' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <p className='text-start'>Confirm Password</p>
                    <Form.Control className='p-3' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button style={{backgroundColor:'tomato', border:'2px solid tomato', padding:'10px 50px'}} className='btn btn-lg mb-5' type="submit">
                   Register
                </Button>
                <p>Have a Acoount? <Link to='/login'>Please Login</Link></p>
            </Form>
            </div>
        </div>
    );
};

export default SignUp;