import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './homeComponent.css';

const HomeComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event: any) {
      event.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
    }
    return(
    <>
        <div className='login'>
            <Form onSubmit={handleSubmit}>
                <h3>Login Form</h3>
                <Form.Group id='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <Button block type='submit' disabled={!validateForm()}>
                Login
                </Button>
                <a href='/register'>Don't have an account? Register here</a>
            </Form>
        </div>
    </>
    );
};

export default HomeComponent;