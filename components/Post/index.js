import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

const pageType = {
  LIST: "list",
  FORM: "form",
}
const Post = ({route}) => {
  const {postData} = route.params;
  const [page, setPage] = useState(pageType.LIST);
  return(<View style={styles.postContainer}>
    <Text>{postData}</Text>
    {
      page === pageType.LIST && <PostList changePage={() => setPage(pageType.FORM)}/>
    }
    {
      page === pageType.FORM && <PostForm changePage={() => setPage(pageType.LIST)}/>
    }
    
  </View>)
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 16,
  },
})

export default Post;
