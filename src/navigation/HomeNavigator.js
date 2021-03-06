import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View ,Text} from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import Settings from '../screens/Settings';
import CreateContact from '../screens/CreateContact';



const HomeNavigator=()=>{
    const HomeStack= createStackNavigator();
    return (
      <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
          <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
          <HomeStack.Screen name={CONTACT_DETAIL }component={ContactDetail}></HomeStack.Screen>
          <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
          <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
      </HomeStack.Navigator>
      );
}
export default HomeNavigator