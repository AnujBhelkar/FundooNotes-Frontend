
/***************************************************************************************
 * @Purpose   : create service for getting data from frontend and store into database
 * @file      : noteServices.js
 * @author    : Anuj
 * @since     : 07/07/2019
 **************************************************************************************/

import Axios from "axios";
var baseUrl = "http://localhost:4000"
/**
 * @description : To create for getting data of notes and store into database.
 * @param {* notes data for storing into backend } notedata 
 * @param {* token for authentication purpose } token 
 */
export function createNotes(notedata,token) {
    return Axios.post(baseUrl+"/createNote",notedata,{
        headers : {
            token : token
        }
    })
}
/**
 * @description : create Array
 */
// export function otherArray(notes){
//     var newArray = []
//     for(var i = 0 ; i < notes.length ; i++ ){
//         newArray.push(notes[i])
//     }
//     return newArray;
// }
export function getNotes() {
    console.log(localStorage.getItem('id'),baseUrl+"/getNotes");
    
    return Axios.get(baseUrl+"/getNotes",{
        headers : {
            token : localStorage.getItem('id')
        }
    })
}