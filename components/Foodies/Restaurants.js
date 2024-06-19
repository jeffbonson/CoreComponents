import { View, Text, StyleSheet, ScrollView } from "react-native";
import { restaurantData } from "../../assets/data/restaurantData";

const Restaurants = () => {

  return (
    <ScrollView style={styles.scrollView}>
      {
        restaurantData.map((item) => <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.restaurant}</Text>
          </View>)
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { paddingHorizontal: 16 },
  card: {
    backgroundColor: "#FFF",
    fontSize: 50,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {fontSize: 20, fontWeight: "bold", color: "#000" },
  row:{ flexDirection: "row", flex: 1 },
  text: { color: "black", fontWeight: "bold",fontSize: 50 }
});

export default Restaurants;
