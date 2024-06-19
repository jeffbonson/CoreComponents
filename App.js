import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
// import NativeComponents from './components/NativeComponents';
import Box from './components/layout/Box';

export default function App() {
 
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Box style={{backgroundColor: "green"}}>
          <Text>Welcome</Text>
        </Box>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1, // this is needed.
    backgroundColor: 'lightblue', // this is needed same as container bg.
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: "center",
    justifyContent: "center",
  }
});
