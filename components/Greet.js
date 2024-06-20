import { View, Text, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// above line can be used instead of the navigation props. this is an additional import

const Greet = ({route, navigation}) => {
  const {name} = route.params;
  return(<View style={styles.greetContainer}>
    <Text>Hello {name}</Text>
    <Button title="Go to Post" onPress={() => navigation.navigate("PostList")} />
    {/* <Button title="Update the name" onPress={() => navigation.setParams({name: "JBN"})} /> */}
  </View>)
}
const styles = StyleSheet.create({
  greetContainer: {
    flex: 1,
    padding: 16,
  }});

export default Greet;
