import { StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
// import NativeComponents from './components/NativeComponents';
// import Restaurants from './components/Foodies/Restaurants';
// import RestaurantMenu from './components/Foodies/RestaurantMenu';
// import Login from './components/Login';
import Post from './components/Post';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Greet from './components/Greet';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Greet'>
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Greet" component={Greet} initialParams={{ name: 'John Doe' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.safeAreaContainer}>
    //   <View style={styles.container}>
    //       <Post />
    //   </View>
    // </SafeAreaView>
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
