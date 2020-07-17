import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ModelTextInput from '../components/ModelTextInput';
import BtnForm from '../components/BtnForm';
 
const CreateAccountScreen = ()  => {

    return(
        <View style={styles.container}>
            <View style={styles.currentPage}>
                <Text style={styles.textCurrentPageTop}>Create</Text>
                <Text style={styles.textCurrentPageBottom}>an account</Text>
            </View>
            <View style={styles.textInputContainer}>
            <View style={styles.modelTextInputContainer}>
                <ModelTextInput textName='Name'  />
                <ModelTextInput textName='Email' />
                <ModelTextInput textName='Password'/>
                <ModelTextInput textName='Confirm Password'/>
            </View>
            <View>
                <BtnForm 
                    title='SIGN UP'
                    onPress={() => alert('Button with adjusted color pressed')}
                    />
            </View>   
            <View style={styles.logInContainer} >
               <Text style={styles.textlogIn}>Already have an account ?</Text>
               <TouchableOpacity
               onPress={() => alert('yo')}
               ><Text style={styles.logIn}> Log in</Text>
               </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'column',
        backgroundColor: '#FFF',
    },
    currentPage:{
        flex:1,
    },
    textCurrentPageTop:{
        color:'#D9ECF2',
        fontSize:40,
        marginTop:80,
        width:150,
        marginLeft:30,
        fontWeight:'bold'   
    },
    textCurrentPageBottom:{
        color:'#D9ECF2',
        fontSize:40,
        width:210,
        marginLeft:30,
        fontWeight:'bold'
    },
    textInputContainer:{
        flex:1,
        backgroundColor:'#31F9BD',
        borderTopLeftRadius:90,
        borderTopRightRadius:90,
    },
    modelTextInputContainer:{
        paddingLeft:60,
        paddingRight:60,
        paddingTop:25,
        paddingBottom: 20
      },
    logInContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    textlogIn:{
       marginTop:20,
       fontSize:15
    },
    logIn:{
        marginTop:20,
        color:'#372FCC',
        fontSize:15,
        fontWeight:'bold'
    }
});

export default CreateAccountScreen;

