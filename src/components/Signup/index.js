import React ,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import { View ,Text, TextInput,Image,TouchableOpacity} from 'react-native'; 
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';

const RegisterComponent=( {onSubmit,
  onChange,
  form,
 error,
  errors})=>{
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const {navigate} = useNavigation();
    const [value ,onChangeText]=React.useState('')
    return(
        <Container>
             <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
      <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
            <Input
                label='UserName'
                onChangeText={(text)=>onChangeText(text)}
                value={value}
                placeholder="Enter Username"
                iconPosition="right"
                onChangeText={(value) => {
                  onChange({name: 'userName', value});
                }}
                error={errors.userName}
            />
             <Input
                label='First Name'
                placeholder="Enter First name"
                iconPosition="right"
                onChangeText={(value) => {
                  onChange({name: 'firstName', value});
                }}
                error={errors.firstName}
            /> 
            <Input
            label='Last Name'
            placeholder="Enter Last name"
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
        
        />
         <Input
                label='Email'
                placeholder="Enter Email"
                iconPosition="right"
                onChangeText={(value) => {
                  onChange({name: 'email', value});
                }}
                error={errors.email}
               
            />
             
            <Input
                label='PassWord'
                secureTextEntry={true}
                placeholder="Enter Password"
                secureTextEntry={isSecureEntry}
                error={errors.password}
                icon={
                  <TouchableOpacity
                    onPress={() => {
                      setIsSecureEntry((prev) => !prev);
                    }}>
                    <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                  </TouchableOpacity>
                }
                iconPosition="right"
                onChangeText={(value) => {
                  onChange({name: 'password', value});
                }}
            />
             <CustomButton
            onPress={onSubmit}
            onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        errors={errors}
              primary
              title="Submit"/> 
                <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
              </View>
              </View>
        </Container>
    )
};
export default RegisterComponent