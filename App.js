import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './components/Login';
import PostList from './components/Post/PostList';
import Restaurants from './components/Foodies/Restaurants';

const Drawer = createDrawerNavigator();

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
        <Drawer.Screen name="Post List" component={PostList} />
        <Drawer.Screen name="Restaurants" component={Restaurants} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
