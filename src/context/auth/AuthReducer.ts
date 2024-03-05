import { AuthState } from './AuthProvider';
import { IUser } from '../../interfaces/IUser';

type AuthActionType =
    | { type: '[Auth] - Login', payload: IUser }
    | { type: '[Auth] - Logout' }

const AuthReducer = (state: AuthState, action: AuthActionType):AuthState => {
    switch (action.type){
        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case '[Auth] - Logout':
            return{
                ...state,
                isLoggedIn: false,
                user: undefined
            }
        default:
            return state
    }
}


export default AuthReducer