import { StyleSheet, View, Text, SafeAreaView, StatusBar, ScrollView,} from 'react-native';
import { restaurantData } from './assets/data/restaurantData';
// import NativeComponents from './components/NativeComponents';
// import Restaurants from './components/Foodies/Restaurants';
// import RestaurantMenu from './components/Foodies/RestaurantMenu';
import Login from './components/Login';

export default function App() {
 
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
          <Login />
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
