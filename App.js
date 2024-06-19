import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
// import NativeComponents from './components/NativeComponents';
import Box from './components/layout/Box';
import CustomButton from './components/customButtons/customButton';

export default function App() {
 
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Box style={{backgroundColor: "green"}}>
          <CustomButton />
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
