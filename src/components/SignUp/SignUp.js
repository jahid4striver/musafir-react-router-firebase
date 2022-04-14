import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const SignUp = () => {
    // const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [conPassword, setConPassword]=useState('');
    const [errorMsg, setErrorMsg]= useState('');

    const navigate= useNavigate();

    const [createUserWithEmailAndPassword, user]= useCreateUserWithEmailAndPassword(auth);


    // const handleName= (e)=>{
    //     setName(e.target.value);
    // }
    const handleEmail= (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword= (e)=>{
        setPassword(e.target.value);
    }
    const handleConPassword= (e)=>{
        setConPassword(e.target.value);
    }

if (user){
    navigate('/');
}

const handleSignIn=e=>{
    e.preventDefault();
   if(password !== conPassword){
    setErrorMsg('Two Password Not Matched');
    return;
   }
   createUserWithEmailAndPassword(email, password);
}
   
    return (
        <div className='my-5 '>
            <h2>Register Account</h2>
            <div className='w-50 mx-auto border border-danger p-5'>
            <Form onSubmit={handleSignIn}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className='text-start'>Your Name</p>
                    <Form.Control onBlur={handleName} className='p-3' type="text" placeholder="Enter Your Name" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className='text-start'>Email address</p>
                    <Form.Control onBlur={handleEmail} className='p-3' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <p className='text-start'>Password</p>
                    <Form.Control onBlur={handlePassword} className='p-3' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <p className='text-start'>Confirm Password</p>
                    <Form.Control onBlur={handleConPassword} className='p-3' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p>{errorMsg}</p>
                <input style={{backgroundColor:'tomato', border:'2px solid tomato', padding:'10px 50px', color: 'white'}} className='btn btn-lg mb-5' type="submit" value="Register" />
                <p>Have a Acoount? <Link to='/login'>Please Login</Link></p>
            </Form>
            </div>
        </div>
    );
};

export default SignUp;