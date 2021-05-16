import { useNavigation } from '@react-navigation/core';
import React ,{useState} from 'react';
import { Text, TouchableOpacity} from 'react-native'; 
import Icon from '../../components/common/Icon';
import ContactComponent from '../../components/ContactComponent'
const  Contacts=()=>{
    const {setOptions, toggleDrawer}=useNavigation();
    const[modalvisisbile,setModalVisible]=useState(false)
    React.useEffect(()=>{
        setOptions({headerLeft:()=>
            <TouchableOpacity    onPress={() => {
                toggleDrawer();
              }}><Text style={{padding:10}}><Icon type="material" style={{padding: 10}} size={25} name="menu" /></Text>
        </TouchableOpacity>},[]);
    })
    return(
        <ContactComponent  modalvisisbile={modalvisisbile} setModalVisible={setModalVisible}/>
    )
};
export default Contacts