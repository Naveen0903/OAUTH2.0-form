import React from "react";
import { Card } from "react-bootstrap";

const LoginSignupLayout = (props) => {
    return(
        <Card style={{ width: '18rem' }} className="mx-auto my-5 card-background">
            <Card.Body>
                <Card.Title>
                    <a href="/">Sign Up</a> | <a href="/signin">Sign In</a></Card.Title>
                    {props.children}
            </Card.Body>
        </Card>
    )
}

export default LoginSignupLayout;