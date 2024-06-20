import { StyleSheet, View, Text, SafeAreaView, StatusBar, Pressable} from 'react-native';
// import NativeComponents from './components/NativeComponents';
// import Restaurants from './components/Foodies/Restaurants';
// import RestaurantMenu from './components/Foodies/RestaurantMenu';
// import Login from './components/Login';
import PostList from './components/Post/PostList';
import PostForm from './components/Post/PostForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Greet from './components/Greet';

const Stack = createNativeStackNavigator();

export default function App() {

  const newPostButton = (navigation) => ({
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate("PostForm")}>
        <Text style={{ color: '#fff', fontSize: 16, marginRight: 10 }}>Add Post</Text>
      </Pressable>
    ),
  });
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Greet'
        screenOptions={{
          headerStyle: {backgroundColor: "#6a51ae"},
          headerTintColor: "#fff",
          headerTintStyle: {fontWeight: "bold"},
          contentStyle: {backgroundColor: "#e8e4f3"},
        }}
      >
        <Stack.Screen name="Greet" component={Greet} options={{title: "Welcome"}} initialParams={{ name: 'John Doe' }} />
        <Stack.Screen
          name="PostList" 
          component={PostList}
          options={({ navigation }) => ({
            title: "Post List",
            ...newPostButton(navigation),
          })} />
        <Stack.Screen name="PostForm" component={PostForm} options={{title: "Post Form"}} />

      </Stack.Navigator>
    </NavigationContainer>
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
