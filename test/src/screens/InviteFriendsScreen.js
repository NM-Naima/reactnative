import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InviteFriendsScreen = () => {

    return (
        <View style={styles.currentPage}>
        
            <View style={styles.currentInviteFriends}>
                <Text style={styles.textCurrentPage}>Contact</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    currentPage:{
        flex:1,
        backgroundColor:'#FFF',
    },
    currentPageInviteFriends:{
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

});

export default InviteFriendsScreen;