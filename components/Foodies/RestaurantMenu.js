import { View, Text, StyleSheet, SectionList } from "react-native";

const groupedData = [
  {type: "Breakfast", data: ["Idily", "Dosa", "Upma", "Appam"]},
  {type: "Lunch", data: ["Biriyani", "Meals", "Friedrice", "Noodles"]},
  {type: "Dinner", data: ["Gheerice"]}
];

const RestaurantMenu = () => {

  return (
    <View style={styles.menuContainer}>
      <SectionList
        sections={groupedData}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.type}</Text>}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        SectionSeparatorComponent={() => <View style={{height: 16}} />}
        renderItem={({ item }) => {
          return <View style={styles.groupedListItem}>
            <Text>{item}</Text>
          </View>
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: 16,
  },
  sectionHeader: {fontWeight: "bold"},
  groupedListItem: {
    padding: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 10,
  },
  text: { color: "black", fontWeight: "bold",fontSize: 50 }
});

export default RestaurantMenu;
