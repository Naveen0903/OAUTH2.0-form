import React from "react";
import { Redirect, Router } from "react-router-dom"

import axios from "axios";
import { ENDPOINT_URL } from "./config"
import Cookie from "js-cookie";
import qs from "querystring";
import jwt from "jsonwebtoken";

export const checkAuth = () => {
    let token = Cookie.get("Token");
    if(token){
        let data = jwt.verify(token, 'user_secret');
        return data;
    }else{
        return false;
    }
}

export const setCookie = (token) => {
    Cookie.set("Token", token, {expires: 3} )
}

export const register = async (formData) => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'x-www-form-urlencoded' },
        data: qs.stringify(formData),
        url: (ENDPOINT_URL+"/signup"),
      };
      let resData = "";
      await axios(options)
        .then(function (response) {
          let{
            status,
            data
          } = response.data;
          
          if(status===200){
            if(data.message){
              resData = data.message;
            }else{
              if(data.token){
                  setCookie(data.token)
                  return (<Redirect to="/profile" />)
              }
              resData = data;
            }
          }else{
            resData = "Something went wrong";
          }
        })
        .catch(function (error) {
          resData = "Something went wrong";
        });
    return resData;
}

export const createSession = async (formData) => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'x-www-form-urlencoded' },
        data: qs.stringify(formData),
        url: (ENDPOINT_URL+"/login"),
      };
      let resData = "";
      await axios(options)
        .then(function (response) {
          let{
            status,
            data
          } = response.data;
          
          if(status===200){
            if(data.message){
              resData = data.message;
            }else{
            if(data.token){
                setCookie(data.token)
                return 
            }
              resData = data;
            }
          }else{
            resData = "Something went wrong";
          }
        })
        .catch(function (error) {
          resData = "Something went wrong";
        });
    return resData;
}

export const removeSession = () => {
  Cookie.remove("Token");
  return (<Redirect to="/signin" />);

}