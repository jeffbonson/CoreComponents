import { StyleSheet, View, Text} from 'react-native';
// import NativeComponents from './components/NativeComponents';
import Box from './components/layout/Box';

export default function App() {
 
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "green"}}><Text>2</Text></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // this is needed.
    backgroundColor: 'lightblue',
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  }
});
