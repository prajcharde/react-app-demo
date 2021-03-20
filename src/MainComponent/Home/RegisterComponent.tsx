import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterComponent = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
  
    function validateForm() {
        let emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return firstname.length > 0 && lastname.length > 0 &&
        email.length > 0  && emailReg.test(email) && 
        password.length > 0 && confirmpassword.length > 0;
    }
  
    function handleSubmit(event: any) {
      event.preventDefault();
      if(password !== confirmpassword){
          alert('Password and Confirm Password are not same');
      } else {
        console.log('FirstName', firstname);
        console.log('LastName:', lastname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('ConfirmPassword:', confirmpassword);
      }
      
    }
    return(
    <>
        <div className='register'>
        <Form onSubmit={handleSubmit}>
                <h4>Register Form</h4>
                <Form.Group id='firstname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type='text'
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                </Form.Group>
                <Form.Group id='lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type='text'
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                </Form.Group>
                <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Form.Group id='confirmpassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Form.Group>
                <Button block type='submit' disabled={!validateForm()}>
                    Register
                </Button>
            </Form>
        </div>
    </>
    );
};

export default RegisterComponent;