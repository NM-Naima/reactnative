import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneEnterScreen from '../screens/PhoneEnterScreen';
import VerifCodeScreen from '../screens/VerifCodeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import MessagingScreen from '../screens/MessagingScreen';
import { Provider } from 'react-redux';
import store from '../../store';

const Stack = createStackNavigator();

export default function Routes () {
   return(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="PhoneEnterScreen" component={PhoneEnterScreen} />
      <Stack.Screen name="VerifCodeScreen" component={VerifCodeScreen} />  
      <Stack.Screen name="MessagingScreen" component={MessagingScreen} />  
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
   )

    
}

