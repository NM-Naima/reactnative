import { AsyncStorage } from 'react-native';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actions/types';

// how to connect to async
// AsyncStorage.setItem('title', value);
// // AsyncStorage.getItem('title')
const token = "joseph";
AsyncStorage.setItem('fb_token', token);

export const userLogin = () => async dispatch => {
    // Verif is token already exist and asign it to the token variable
    let token = await AsyncStorage.getItem('fb_token');
    console.log("action called")
    if(token){
        // dispatch an action saying User login is done
        dispatch({ type : USER_LOGIN_SUCCESS, payload: token})
        /*return {
            type : USER_LOGIN_SUCCESS, payload: true
        }*/
    } else {
        console.log('le suite arrive bientôt, failed');
        dispatch({ type : USER_LOGIN_FAIL});
        /*return {
            type: USER_LOGIN_FAIL, payload: false
        }
        // navigate to the PhoneEnterScreen to login
        // goToLogin = () => this.props.navigation.navigate('Login')
        // doUserLogin(dispatch)*/

    }   
};

/*const doUserLOgin = async dispatch => {
    let { type, token } = await the token anser

    if(type === 'cancel'){
        //dispatch an action to the user
        return dispatch({ type : USER_LOGIN_FAIL })
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type : USER_LOGIN_SUCCESS, playload: token}); 

};*/



/*const handleSubmit  = async () => {
    try {
        await axios.post(`${ROOT_URL}/createUser`, { phone : phone });
        await navigation.push('VerifCodeScreen');    
        await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone : phone });   
    } catch(err){
        console.log(err)           
    }          
}

const handleSubmit = async () => {
    try{
        await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone : phone, code : code });
    } 
    catch(err){
        console.log(err)
    }
}*/
