
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
/**
 * @description :  Here create function for archive notes
 */
export function archive(data) {
    return Axios.post(baseUrl+"/archive",data,{
        headers : {
            token : localStorage.getItem('id')
        }
    })

}
/**
 * @description :  Here create function for getting archive Notes
 */
export function getArchiveNotes() {
    const token = localStorage.getItem('id')
    return Axios.get(baseUrl+"/getArchiveNotes",{
        headers : {
            token : token
        }
    })

}
/**
 * @description :  Here create function for updating title
 */
export function updateTitle(data){
    return Axios.post(baseUrl+"/editTitle",data,{
        headers : {
            token : localStorage.getItem('id')
        }
    })

}
/**
 * @description :  Here create function for updating description
 */
export function updateDescription(data){
    return Axios.post(baseUrl+"/editDescription",data,{
        headers : {
            token : localStorage.getItem('id')
        }
    })

}

/**
 * @description :  Here create function for updating color
 */
export function updateColor(data){
    // console.log("color data is ---> ",data);  
    return Axios.put(baseUrl+"/updateColor",data,{
        headers : {
            token : localStorage.getItem('id')
        }
    })

}

/**
 * @description :  Here create function for delete note and transfer to trash box
 */
export function trash(data){
    // console.log("color data is ---> ",data);  
    return Axios.post(baseUrl+"/trash",data,{
        headers : {
            token : localStorage.getItem('id')
        }
    })

}