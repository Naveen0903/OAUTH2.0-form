import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";

import LoginSignupLayout from "../loginSignupLayout"
import { login } from "../signup/formelements";

import { createSession } from "../../utils/auth";

const Signin = () => {
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
        if("email" in formData && "password" in formData){
            let res = await createSession(formData);
            console.log(res);
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
                    <Form>
                        {
                            login.map((fields)=>{
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
                            Sign in
                        </Button>
                        <a href="#">Forgot password?</a>
                    </Form>
                }
                {msg && <label> Success </label>}    
                </Card.Text>
            </LoginSignupLayout>
        </>
    )
}

export default Signin;