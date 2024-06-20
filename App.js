import 'react-native-gesture-handler';
import React from 'react';
import { Text, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import PostList from './components/Post/PostList';
import PostForm from './components/Post/PostForm';
import Restaurants from './components/Foodies/Restaurants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const PostStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PostList"
      component={PostList}
      options={({ navigation }) => ({
        title: "Post List",
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("PostForm")}>
            <Text style={{ color: '#000', fontSize: 16, marginRight: 10 }}>Add Post</Text>
          </Pressable>
        ),
      })}
    />
    <Stack.Screen
      name="PostForm"
      component={PostForm}
      options={{ title: "Post Form" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login Page",
            drawerLabel: "Login Drawer Label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            }
          }}
        />
        <Drawer.Screen
          name="Posts"
          component={PostStack}
          options={{
            title: "Posts",
            drawerLabel: "Posts",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            }
          }}
        />
        <Drawer.Screen name="Restaurants" component={Restaurants} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
