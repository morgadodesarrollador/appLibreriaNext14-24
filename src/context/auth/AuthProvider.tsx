'use client'
import { FC, useReducer, useEffect } from 'react';
import { IUser } from '@/interfaces/IUser';
import { AuthContext } from './AuthContext';
import { IRespLogin } from './interfaces/ILogin';
import AuthReducer from './AuthReducer';
import apiAuth from '@/app/auth/model/apiAuth';
import { setCookie } from 'cookies-next';
import Cookies from 'js-cookie';

export interface AuthState{
    isLoggedIn: boolean;
    user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}
interface Props{
    chidren: any
}
export const AuthProvider:FC<{children: any}> = ({ children }) => {
    const [ state, dispatch ] = useReducer( AuthReducer, AUTH_INITIAL_STATE );
    const loginUser = async (email: string, password: string):Promise<boolean> => {
        try {
            const data  = await apiAuth.login({ email, password });
            console.log(data);
            const { token, user } = data;
            console.log(user);
           Cookies.set('token', token);
            // cookies().set('token', token);
            // cookies().set('email', user.email);
            setCookie('token', token);
            setCookie('email', user.email);
            setCookie('user', user);
            
          //  Cookies.set('email', user.email); 
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 

    // const registerUser = async (email: string, password: string, fullName: string ):Promise<IRespuestaApiAuth>=> {
    // }

    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            // registerUser
        }}>
            { children }
        </AuthContext.Provider>
    )
}