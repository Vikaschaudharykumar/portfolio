import {networkCall} from "../networkCall";

export  const  contact_us =async(params)=>{
    return await networkCall("CONTACT_US",params);
}