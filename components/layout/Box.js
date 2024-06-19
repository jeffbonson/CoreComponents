import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from "react-native";
import { useState, useEffect } from "react";

const Box = ({children, style}) => {

  // We can also make use of the useWindowDimensions hook and remove the related to useState and useEffect.
  const windowWidth1 = useWindowDimensions().width;
  const windowHeight2 = useWindowDimensions().height;
  
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({window});
    });
    return () => subscription?.remove();
  }, []);

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  console.log({windowWidth, windowHeight});

  // Dynamic styles
  const dynamicStyles = StyleSheet.create({
    box: {
      width: windowWidth > 500 ? "70%" : "90%",
      height: windowHeight > 600 ? "60%" : "90%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
    },
    text: {
      ...Platform.select({ // this is recommended.
        ios: {color: 'purple', fontSize: 24},
        android: {color: 'white', fontSize: 30},
      }),
      fontSize: windowWidth > 500 ? 30 : 10,
      fontWeight: "bold",
      textAlign: "center",
    }
  });

  return (
    <View style={[dynamicStyles.box, style]}>
      {children}
      <Text style={dynamicStyles.text}>
        {
          Platform.OS === "android" ? "Android" : "Others" // for small changes
        }
      </Text>
    </View>
  );
};

export default Box;
