import { StyleSheet, View, Text, SafeAreaView, StatusBar,} from 'react-native';
import { restaurantData } from './assets/data/restaurantData';
// import NativeComponents from './components/NativeComponents';
import Box from './components/layout/Box';
import CustomButton from './components/customButtons/customButton';
import Restaurants from './components/Foodies/Restaurants';

export default function App() {
 
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
          <Restaurants />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1, 
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
