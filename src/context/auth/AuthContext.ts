import { createContext } from 'react';
import { IUser } from '@/interfaces/IUser';
import { IRespLogin } from './interfaces/ILogin';


interface ContextProps{
    isLoggedIn: boolean;
    user:IUser;

    //firmas
    loginUser: (email: string, password: string) => Promise<boolean>;
    // registerUser: (email: string, password: string, fullName: string ) => Promise<IRespLogin>

}

export const AuthContext  = createContext( {} as ContextProps );