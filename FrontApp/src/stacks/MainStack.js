import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Preload from '../screens/Preload'; 
import SignIn from '../screens/SignIn'; 
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'

const Stack = createStackNavigator(); 

export default () => (
    <Stack.Navigator
        initialRoutername = "Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        

        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn}   />
        <Stack.Screen name="SignUp" component={SignUp}   />
        <Tab.Screen name="Home" component={Home} />
    </Stack.Navigator>
); 