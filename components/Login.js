import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const Login = ({navigation}) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    errors: {},
  });

  const validateForm = () => {
    let errors = {};
    const {username, password} = data;
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setData({...data, errors});
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (data.username === "admin" && data.password === "admin") {
        // navigation.toggleDrawer(); // this opens the drawer
        navigation.jumpTo("PostList") // this would go to the post list page
      }
    }
  }

  console.log(data)
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={require("../assets/adaptive-icon.png")} style={styles.logo}/>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={data.username}
          onChangeText={(username) => setData({...data, username, errors: {...data.errors,username: undefined}})}/>
        {
          data.errors && data.errors.username && <Text style={styles.errorLabel}>Username is required</Text>
        }

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter password"
          value={data.password}
          onChangeText={(password) => setData({...data, password, errors: {...data.errors, password: undefined}})}/>
        {
          data.errors && data.errors.password && <Text style={styles.errorLabel}>Password is required</Text>
        }
        <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        
        
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logo: {
    width: 200, height: 200, alignSelf: "center",
  },
  loginForm: {
    padding: 20,
    
  },
  label: {fontSize: 16, marginBottom: 2, fontWeight: "bold", marginTop: 10,},
  input: {height: 40, borderColor: "#ddd", borderWidth: 1, borderRadius: 5, padding: 5},
  errorLabel: {fontSize: 16, marginBottom: 2, color: "red"},
  submitButton: {
    backgroundColor: '#6a51ae',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Adjusted height to 50
    borderRadius: 5,
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});


export default Login;
