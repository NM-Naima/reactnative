import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import * as actions from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const LoadingScreen = ({ navigation }) =>{
    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();
    // console.log(authData);
    useEffect( async () => {
        console.log("step 1 " + authData.isLogin)
        dispatch(actions.userLogin());
        console.log("step 2 " + authData.isLogin)
        
        if (authData.token)
        {
            console.log(" auth success" + " " + authData.token);
            navigation.push('MessagingScreen');         
        }      
        else {
            console.log(" auth error" + " " + authData.token);
            navigation.push('PhoneEnterScreen');
        }         
    }, []);

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.textContent}>I'M IN</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    textContent:{
        alignSelf:"center",
        fontSize:50
    },
    circleL:{
        marginLeft:50
    }
});

export default LoadingScreen;
