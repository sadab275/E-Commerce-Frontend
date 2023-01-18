import { ILoginResponse } from "../../interfaces/response";
import { callFetch } from "../utils/CallFetch";

// import { callFetch, MyFetchInterface } from "../utils/CallFetch"
export const API_ENDPOINT = process.env['NEXT_PUBLIC_API_ENDPOINT']

export interface LoginInterface {
    status: number
    data: {
        access_token: string | null
    }
}

export class EcommerceApi {
    //DEMO API CALLING STRUCTURE
    static async login(token: string, email: string, fullName: string, avatar: string, tokenType: string,userRole:string): Promise<ILoginResponse> {
        console.log(token);
        console.log(API_ENDPOINT)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        const urlencoded = new URLSearchParams();
        urlencoded.append("token", token);
        urlencoded.append("tokenType", tokenType);
        urlencoded.append("email", email);
        urlencoded.append("fullName", fullName);
        urlencoded.append("avatar", avatar);
        urlencoded.append("userRole", userRole);
        // urlencoded.append("userType", userType);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions)
    }
}