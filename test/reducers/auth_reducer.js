import { 
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
 } from '../actions/types';


 export default function (state = {}, action){
     switch(action.type){
         case USER_LOGIN_SUCCESS :
             return { token : action.payload};
         case USER_LOGIN_FAIL :
            return { token : null};
        default:
            return state;    
             
     }
 }