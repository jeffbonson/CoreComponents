import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
const logo = require("./assets/splash.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 300, height: 300}}/>
      <Image source={{uri: 'https://picsum.photos/300'}} style={{width: 300, height: 300}}/>
      <ImageBackground source={logo} style={{flex: 1}}>
        <Text>Background</Text>
        <Text>Background</Text>
        <Text>Background</Text>
        <Text>Background</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // this is needed.
    backgroundColor: 'white',
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "black",
  },
  inner: {
    width: 200, height:200, backgroundColor: "lightgreen", justifyContent: "center", alignItems: "center",
    white: {color: "white", fontWeight: "bold"}
  }
});
