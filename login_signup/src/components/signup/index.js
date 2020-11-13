import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";

import LoginSignupLayout from "../loginSignupLayout"
import { signup } from "./formelements";
import { register } from "../../utils/auth";

const Signup = () => {
    const [formData, setFromData] =  useState({});
    const [msg, setMsg] = useState(false);

    const handleChange = (event) => {
        let {name, 
            value} = event.target;
        let formdata = {...formData};
        formdata[name] = value;
        setFromData(formdata);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if("name" in formData && "email" in formData && "password" in formData){
            let res = await register(formData);
            if(res.token){
                setMsg(true);
            }
        }else{
            console.log("Failed");
        }
    }

    return (
        <>
            <LoginSignupLayout>
                <Card.Text>
                {!msg && 
                    <Form method="post">
                        {
                            signup.map((fields, idx)=>{
                                let {
                                    text,
                                    type,
                                    name,
                                    placeholder
                                } = fields;

                                return(
                                    <Form.Group key={text} controlId={name}>
                                        <Form.Label>{text}</Form.Label>
                                        <Form.Control type={type} name={name} placeholder={placeholder} onChange={handleChange}/>
                                    </Form.Group>
                                )
                            })
                        }
                        <Button variant="primary" type="submit" className="signup-btn" onClick={handleSubmit}>
                            Sign up
                        </Button>
                        <label> By clicking signup you agree for <a href="#">Terms and Conditions</a></label>
                    </Form>
                }
                {msg && <label> Success </label>}
                </Card.Text>
            </LoginSignupLayout>
        </>
    )
}

export default Signup;