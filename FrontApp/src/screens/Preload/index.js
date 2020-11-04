import React, { useEffect } from 'react'; 
import { Container, LoadingIcon } from './styles'; 
import AsyncStorage from '@react-native-community/async-storage'; 
import { useNavigation } from '@react-navigation/native'; 

import LogoFord from '../../assets/LogoFord.svg'; 

export default () => {

    const navigation = useNavigation(); 

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token'); 
            if(token){
                //validadar token
            }else{
                navigation.navigate('SignIn'); 
            }
        }
        checkToken(); 
    }, []); 

    return(
        <Container>
            <LogoFord width="100%" height="150"/>
            <LoadingIcon size="large" color="#737373"/>
        </Container>
    );
}