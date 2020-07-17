import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { ModelTextInputColorBlue, BtnForm } from '../components'

const ProfilScreen = () => {

    return (
        <View style={styles.currentPage}>
            <View style={styles.currentPageProfile}>
                <Text style={styles.textCurrentPage}>Profile</Text>
            </View>
            <Image source={ require('../assets/face-man.jpg')} style={styles.circleImg}/>
            <TouchableOpacity style={styles.imgEditable}/>
            <View style={styles.horizontalTrait}/>
            <View style={styles.verticalTrait}/>
            <View style={styles.circleLGreyLeft}/>
            <View style={styles.circleLGreyRight}/>
            <View style={styles.circleMVioletMiddle}/>
            <View style={styles.circleMVioletLeft}/>
            <View style={styles.circleSViolet}/>
            <View style={styles.circleLGreenLeft}/>
            <View style={styles.circleLGreenRight}/>
            <View style={styles.circleMGreenMiddle}/>
            <View style={styles.circleSGreenLeft}/>
            <View style={styles.circleSGreenRight}/>
            <View style={styles.textInputContainer}> 
                <ModelTextInputColorBlue textName='Name'/>
                <ModelTextInputColorBlue textName='Birthday date'/>
                <ModelTextInputColorBlue textName='Statut'/>       
            </View>
            <View style={styles.btnContainer}>
                <BtnForm
                    title='SAVE'
                        onPress={() => alert('Button with adjusted color pressed')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    currentPage:{
        flex:1,
        backgroundColor:'#FFF',
    },
    currentPageProfile:{
        flex:1.5,
        backgroundColor:'#FFF'
    },
    textCurrentPage:{
        marginTop:50,
        marginLeft:30,
        color:'#372FCC',
        fontSize:15,
        fontWeight:'bold'
    },
    circleImg:{
        position:'absolute',
        top:140,
        left:115,
        zIndex:2,
        borderWidth:2,
        borderColor:'#31F9BD',
        borderRadius:1000,
        backgroundColor:'blue',
        height:170,
        width:170
    },
    imgEditable:{
        position:'absolute',
        top:265,
        left:245,
        zIndex:2,
        height:30,
        width:30,
        backgroundColor:'#372FCC',
        borderRadius:50
    },
    horizontalTrait:{
        position:'absolute',
        top:278,
        left:250,
        zIndex:3,
        width:20,
        borderWidth:1,
        borderColor:'#fff'
    },
    verticalTrait:{
        position:'absolute',
        top:269,
        left:259,
        zIndex:3,
        borderColor:'#fff',
        height:20,
        borderLeftWidth:2
    },
    textInputContainer:{
        flex:1.5,
        zIndex:1,
        justifyContent:'center',
        paddingLeft:60,
        paddingRight:60,
        paddingTop:200,
    },
    btnContainer:{
        flex:2,
        justifyContent:'center'
    },
    circleLGreyLeft:{
        height:18,
        width:18,
        borderWidth:2,
        borderColor:'#D9ECF2',
        borderRadius:50,
        position:'absolute',
        top:310,
        left:130
    },
    circleLGreyRight:{
        height:18,
        width:18,
        borderWidth:2,
        borderColor:'#D9ECF2',
        borderRadius:50,
        position:'absolute',
        top:115,
        left:305
    },
    circleMVioletMiddle:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:85,
        left:240
    },
    circleMVioletLeft:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:270,
        left:90
    },
    circleSViolet:{
        height:9,
        width:9,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:97,
        left:340
    },
    circleLGreenRight:{
        height:17,
        width:17,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:145,
        left:335
    },
    circleLGreenLeft:{
        height:17,
        width:17,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:220,
        left:60
    },
    circleMGreenMiddle:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:115,
        left:235
    },
    circleSGreenLeft:{
        height:7,
        width:7,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:255,
        left:25
    },
    circleSGreenRight:{
        height:7,
        width:7,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:160,
        left:265
    },
});

export default ProfilScreen;