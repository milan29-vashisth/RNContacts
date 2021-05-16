import React from 'react'
import { View, Text,FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import color from '../../assets/theme/color'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'

const ContactComponent = ({modalvisisbile,loading,data,setModalVisible}) => {
    const ListEmptyComponent=()=>{
        return(
            <View style={{paddingHorizontal:100,paddingVertical:100}} >
                <Text>No Conatct to show</Text>
            </View>
        )
    }
    const renderItem=({item})=>{
return(
    <TouchableOpacity>
        <Text>Contacts</Text>
    </TouchableOpacity>
)
    }
    return (
        <View>
           {/* <AppModal 
            modalFooter={<></>}
            modalBody={<View>
                <Text>Hello from modal</Text>
           </View>}
            title="My Profile"
           setModalVisible={setModalVisible} 
           modalvisisbile={modalvisisbile}/> */}
{loading &&(
     <View style={{paddingHorizontal:100,paddingVertical:100}} >
    <ActivityIndicator color={color.primary}/>
    </View>
)}
    <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item)=>String(item.id)}
        ListEmptyComponent={ListEmptyComponent}
    />
    
        </View>
    
    )

}
export default ContactComponent
