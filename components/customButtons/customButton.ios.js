import { View, Button, StyleSheet, } from "react-native";

const CustomButton = () => {

  const dynamicStyles = StyleSheet.create({
    button: {
      backgroundColor: "yellow",
    },
    text: {
      color: "black",
      fontWeight: bold,
      fontSize: 24,
    }
  });

  return (
    <View style={dynamicStyles.button}>
      <Button style={dynamicStyles.text} title="IOS Button"/>
    </View>
  );
};

export default CustomButton;
