import React from "react";
import "./profile.css";
import {
    checkAuth,
    removeSession} from "../../utils/auth";

const profile = () => {
    let data = checkAuth();
    let {
        name
    } = data;

    const handleClick = () => {
        removeSession()
    }
    return (
        <div class="container">
            <div class="row">
                <div class="">
                <div class="our-team">
                    <div class="picture">
                    <img class="img-fluid" src="https://picsum.photos/130/130?image=856" />
                    </div>
                    <div class="team-content">
                    <h3 class="name">{name}</h3>
                    <h4 class="title">Web Developer</h4>
                    </div>
                    <ul class="social">
                    <li><a href="#" class="fa fa-facebook" aria-hidden="true"></a></li>
                    <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
                    <li><a href="#" class="fa fa-google-plus" aria-hidden="true"></a></li>
                    <li><a href="#" class="fa fa-linkedin" aria-hidden="true"></a></li>
                    </ul>
                </div>
                <button class="btn-light" onClick={handleClick}>Sign out</button>
                </div>
            </div>
        </div>
    );
}

export default profile;