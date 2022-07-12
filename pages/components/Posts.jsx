import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {  useQuery } from '@apollo/client';
import Loader from './Loader';
import Post from './Post';
import QUERY_COLLECTION from './queries/gqlQueryCollection';


const Posts = () => {
  
  const { data, loading } = useQuery(QUERY_COLLECTION);
  let posts = [];
  if (!loading) {
    posts = data.postsCollection.items;
  }
//   console.log("data:", data);
  const renderPost = ({ item }) => <Post post={item} />;
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
