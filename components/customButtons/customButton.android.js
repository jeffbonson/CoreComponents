import { View, Button, StyleSheet, } from "react-native";

const CustomButton = () => {

  const dynamicStyles = StyleSheet.create({
    button: {
      backgroundColor: "midnightblue",
    },
    text: {
      color: "white",
      fontSize: 30,
    }
  });

  return (
    <View style={dynamicStyles.button}>
      <Button style={dynamicStyles.text} title="Android Button"/>
    </View>
  );
};

export default CustomButton;
