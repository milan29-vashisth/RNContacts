import React from 'react'
import { View ,Text, TextInput} from 'react-native'; 
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const LoginComponent = () => {
    return (
        <Container>
        <Input
            label='UserName'
          
            iconPosition="right"
          //error={'This field is require'}
        />
        <Input
            label='PassWord'
            
            icon={<Text>Hide</Text>}
            iconPosition="right"
        />
         <CustomButton
         
          primary
          title="Submit"/> 
    </Container>
    )
}

export default  LoginComponent
