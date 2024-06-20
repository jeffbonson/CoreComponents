import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useState, useEffect } from "react";

const PostList = () => {
  const [data, setData] = useState({
    posts: [],
    isLoading: true,
    refreshing: false,
  });

  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const posts = await response.json();
    setData({
      ...data,
      isLoading: false,
      posts,
      refreshing: false,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(data.refreshing) {
      fetchData(20);
    }
  }, [data.refreshing])


  console.log(data.isLoading)
  if (data.isLoading === true)
    {
      return(<ActivityIndicator size="large" color="red" animating={true}/>)
    }

  return(<View style={styles.listContainer}>
    {data.posts && <FlatList
      data={data.posts}
      ItemSeparatorComponent={() => <View style={{height: 16}}/>}
      ListEmptyComponent={() => <View>No Post</View>}
      ListHeaderComponent={() => <Text style={{paddingBottom: 20, fontWeight: "bold"}}>Post List</Text>}
      renderItem={({item, index}) => {
        return <View style={styles.postItem}>
          <Text style={styles.postTitle}>{index+1} - {item.title}</Text>
          <Text style={styles.postBody}>{item.body}</Text>
        </View>
      }}
      refreshing={data.refreshing}
      onRefresh={() => setData({...data, refreshing: true})}/>
    }
  </View>)
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 16,
  },
  postItem: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postBody: {

  }
})

export default PostList;
