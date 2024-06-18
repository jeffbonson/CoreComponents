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

