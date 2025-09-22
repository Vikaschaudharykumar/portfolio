
import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const API_LIST = {
    CONTACT_US : "api/contact"
}

export const networkCall = async(api,params)=>{
        try {
            const response = await axios.post(BASE_URL+API_LIST[api], params);
            return response;
        } catch (error) {
            console.log("API ERROR",error);
            return {status:false,message:"Server Error",data:{}};
        }
};