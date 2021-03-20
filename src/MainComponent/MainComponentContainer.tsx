import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import HomeComponent from './Home/HomeComponent';
import ContactComponent from './Contact/ContactComponent';
import AboutComponent from './About/AboutComponent';
import RegisterComponent from './Home/RegisterComponent';
export default class MainComponentContainer extends React.Component
{
    render(){
        return(
        <>
            <Router>
            <div>
                <div>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr/>
                </div>
                <Switch>
                    <Route path="/about">
                        <AboutComponent/>
                    </Route>
                    <Route path="/contact">
                        <ContactComponent/>
                    </Route>
                    <Route path="/register">
                        <RegisterComponent/>
                    </Route>
                    <Route path="/">
                        <HomeComponent/>
                    </Route>
                </Switch>
            </div>
            </Router>
        </>
        );
    }
}