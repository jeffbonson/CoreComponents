# Create the app
npx create-expo-app@latest CoreComponents --template blank@sdk-51
- View
- image
- BackgroundImage
- Text
- Scroll

# Button
onPressIn
  onPressOut > onPress
  500ms > onLongPress > onPressOut

# Modals
- animationType can be fade, slide
- presentationStyle='formSheet' and pageSheet - only works for ios

# StatusBar
- Cannot change the ios background color. only in ios
- Text color can be changed
- barStyle can be light or dark

# ActivityIndicator
- Size: can be large and small
- color can be changed
- animating - true to display, false to hide

# Alert
- Alert.alert('adasdasd')
- Alert.alert("Invalid data", "Dob Incorrect")
- Alert with 2 buttons
  - Alert.alert("Invalid data", "Dob Incorrect", [
        {text: 'Cancel', onPress: () => alert('Cancel pressed')},
        {text: 'Ok', onPress: () => alert('Ok pressed')},
      ])
- Please refer the documentation at reactnative.dev/docs/accessibilityinfo for android vs ios

# Box Layout
- might need to add a margin top for ios
- view is already a flex container and child are all flex items
- default relative position
- Dimensions.get("screen") or "window". 
- dimension are not recommended
- orientation changed from portrait to default

# SafeAreaView
- the ios device has a problem with margin top, 
- so we usually add a margin-top so that we can see the top section.
- this is not the right way to do it though.
- Hence we use a SafeAreaView

# Platform specific code
- Platform.OS
- Platform.select
- file extensions like .ios.js / android.js used in components/customButtons

# Flatlist
- used for long list
- renders items lazely and saved processing time
- ItemSeparatorComponent - except for top and bottom
- ListEmptyComponent - when the data is empty array

# Navigation
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context

# Drawer
- npm install @react-navigation/drawer
- npm install react-native-gesture-handler react-native-reanimated
- update the babe..config.js
- update the package.json with the versions if needed
    - "react-native-gesture-handler": "~2.16.1",
    - "react-native-reanimated": "~3.10.1",
