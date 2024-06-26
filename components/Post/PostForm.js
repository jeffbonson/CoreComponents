import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";

const PostForm = ({ navigation }) => {

  // can use useEffect, but you can notice a slight delay in setting the header Label.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Post 123"
    })
  }, [navigation])

  const [data, setData] = useState({
    title: '',
    body: '',
    errors: {
      title: undefined,
      body: undefined,
    },
    isLoading: false,
  });

  const validateForm = () => {
    let errors = {};
    const {title, body} = data;
    if (!title) errors.title = "Title is required";
    if (!body) errors.body = "Body is required";
    setData({...data, errors});
    return Object.keys(errors).length === 0;
  };

  const addPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: data.title, body: data.body})
    });
    const posts = await response.json();
    setData({
      ...data,
      isLoading: false,
    });
    alert("Successfully posted")
    navigation.navigate("PostList");
  };


  useEffect(() => {
    if (data.isLoading) {
      addPost();
    }
  }, [data.isLoading]);

  const handleSubmit = () => {
    if (validateForm()) {
      setData({...data, isLoading: true})
    }
  };

  return(<View style={styles.formContainer}>
    <View style={styles.postForm}>
    <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={data.title}
          onChangeText={(title) => setData({...data, title, errors: {...data.errors,title: undefined}})}/>
        {
          data.errors && data.errors.title && <Text style={styles.errorLabel}>Title is required</Text>
        }

        <Text style={styles.label}>Body</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter content"
          value={data.body}
          onChangeText={(body) => setData({...data, body, errors: {...data.errors, body: undefined}})}/>
        {
          data.errors && data.errors.body && <Text style={styles.errorLabel}>Body is required</Text>
        }

        <Button
          style={styles.submitButton}
          title={data.isLoading ? "Adding..." : "Add"}
          onPress={() => handleSubmit()}
          disabled={data.isLoading}/>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 16,
  },
  postForm: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
  },
  label: {fontSize: 16, marginBottom: 2, fontWeight: "bold", marginTop: 10,},
  input: {height: 40, borderColor: "#ddd", borderWidth: 1, borderRadius: 5, padding: 5},
  errorLabel: {fontSize: 16, marginBottom: 2, color: "red"},
  submitButton: {marginTop: 300,},
})

export default PostForm;
