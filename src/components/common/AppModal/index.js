import React from 'react'
import { View, Text ,Modal,ScrollView, TouchableOpacity} from 'react-native'
import Icon from '../../common/Icon';
import styles from './styles'

const AppModal = ({modalVisible,modalBody,modalFooter,title,setModalVisible}) => {
    return (
      <Modal visible={modalVisible} transparent>
          <TouchableOpacity onPress={()=>{
              setModalVisible(false)
          }} style={styles.wrapper}> 

<View style={styles.modalView}>
<ScrollView>
    <View style={styles.header}>
    <Icon type="material" size={27} name="close" />
<Text style={styles.title}>{title|| 'RNContacts'}</Text>

    </View>
     <View style={styles.footerSeparator}></View>
    <View style={styles.body}><View>{modalBody}</View></View> 
 
    {!modalFooter && ( 
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}

</ScrollView>
</View>
          </TouchableOpacity>

      </Modal>
    )
}

export default AppModal
