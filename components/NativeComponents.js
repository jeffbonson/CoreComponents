import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
import Greet from './Greet';
const logo = require("../assets/splash.png");

const NativeComponents = ({name}) => {
  const [data, setData] = useState({
    modal: false,
  })
  
  return(<View style={styles.container}>
    <StatusBar backgroundColor={"green"} barStyle="light-content"/>
    
    <Greet name="Jeff" />
   
    <ScrollView>
      <Pressable onPress={() => alert('image pressed')}>
        <Image source={logo} style={{width: 300, height: 300}}/>
      </Pressable>
      <Button title="Open modal" onPress={() => setData({...data, modal: true})} color="red"/>
    </ScrollView>
    <Modal
      visible={data.modal}
      style={{flex:1, backgroundColor: "lightblue", padding: 20}}
      onRequestClose={() => setData({...data, modal: false})}
      animationType='slide'
      presentationStyle='formSheet'
    >
      <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Button title="Close" onPress={() => setData({...data, modal: false})} />
    </Modal>
    <ActivityIndicator size="large" color="red" animating={true}/>
    <Button title="Show Alert" onPress={() => Alert.alert("Invalid data", "Dob Incorrect",[
      {text: 'Cancel', onPress: () => alert('Cancel pressed')},
      {text: 'Ok', onPress: () => alert('Ok pressed')},
    ])} />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // this is needed.
    backgroundColor: 'white',
    padding: 20,
    alignContent: "center"
  }
});

export default NativeComponents;
