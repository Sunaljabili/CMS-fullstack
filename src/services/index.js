import {BASE_URL} from "./constants";
import axios from "axios"

// requests


// get all

 async function getAll(endpoint){
    try {
        const response = await axios.get(BASE_URL+endpoint);
        return response;
    } catch (error) {
        return error
    }
} 
// get one
 async function getOne(endpoint,id){
    try {
        const response = await axios.get(BASE_URL + endpoint +`/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}
// get delete
 async function deleteOne(endpoint,id){
    try {
        const response = await axios.delete(BASE_URL+endpoint+ `/${id}`)
        return response.data;
        
    } catch (error) {
        return error
    }
}
// post 
 async function post(endpoint,payload){
    try {
        const response = await axios.post(BASE_URL + endpoint,payload);
        return response.data;
    } catch (error) {
        return error
    }
}
// put one
 async function putOne(endpoint,payload,id){
    try {
        const response = await axios.put(BASE_URL +endpoint +`/${id}` ,payload);
        return response.data
    } catch (error) {
        return error;
    }
}

const controller = {
    getAll,
    getOne,
    delete:deleteOne,
    put:putOne,
    post
}

export default controller;