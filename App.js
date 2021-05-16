import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native'
import AppNavContainer from './src/navigation/index';

const App=()=> {
  return (
   <AppNavContainer/>
   
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});