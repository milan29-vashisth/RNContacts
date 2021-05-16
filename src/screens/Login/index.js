import React ,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import { View ,Text, TextInput,Image,TouchableOpacity} from 'react-native'; 
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import Message from '../../components/Message';


const  Login=(
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
)=>{
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
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}
            <Input
                label='UserName'
                onChangeText={(text)=>onChangeText(text)}
                value={value}
                placeholder="Enter Username"
                iconPosition="right"
              //error={'This field is require'}
            />
            <Input
                label='PassWord'
                placeholder="Enter Password"
                secureTextEntry={isSecureEntry}
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
            
              primary
              title="Submit"/> 
                <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
          </View>
              </View>
              </View>
        </Container>
    )
};
export default Login