import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { restaurantData } from "../../assets/data/restaurantData";

const Restaurants = () => {

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={restaurantData}
        horizontal={false}
        ItemSeparatorComponent={<View style={{height: 16}} />}
        ListHeaderComponent={<Text style={styles.listHeader}>Restaurants</Text>}
        ListFooterComponent={<Text style={styles.listHeader}>Footer</Text>}
        ListEmptyComponent={<Text>No items found</Text>}
        renderItem={({item}) => {
          console.log(item.id)
          return(
            <View key={item.id} style={styles.card}>
              <Image source={{uri: item.image}} style={{width: "100%", height: 300}}/>
              <Text style={styles.title}>{item.restaurant}</Text>
            </View>)
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  listHeader: {fontWeight: "bold", fontSize: 24, paddingVertical: 16},
  card: {
    backgroundColor: "#FFF",
    fontSize: 50,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "column",
    overflow: "hidden",
  },
  title: {fontSize: 20, fontWeight: "bold", color: "#000", padding: 10 },
  row:{ flexDirection: "row", flex: 1 },
  text: { color: "black", fontWeight: "bold",fontSize: 50 }
});

export default Restaurants;
