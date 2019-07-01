/***************************************************************************************
 * @Purpose   : create service for getting data from frontend and store into database
 * @file      : userServices.js
 * @author    : Anuj
 * @since     : 27/06/2019
 **************************************************************************************/
/**
 * @description : importing 'axios' package for sending data  
 */
 import axois from 'axios'

 var baseUrl = 'http://localhost:4000';
 /** 
  * @param {* get the data from frontend for store } userData 
  */
 export function register(userData) {
    return axois.post(baseUrl+'/register/',userData);
 }
  /** 
  * @param {* get the data from frontend for store } userData 
  */
 export function login(userData) {
    return axois.post(baseUrl+'/login',userData)
}

 /** 
  * @param {* get the data from frontend for store } userData 
  */
 export function forgotPassword(userData) {
   return axois.post(baseUrl+'/confirmUser',userData)
}

 /** 
  * @param {* get the data from frontend for store } userData 
  */
 export function resetPassword(password,token) {
   return axois.post(baseUrl+`/resetPassword/${token}`,{
      'password' : password
   },{
         headers : {
            token : token
         }
   })
}