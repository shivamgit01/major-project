import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Api from "./Api";

function News() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: -20,
          marginTop: 10,
        }}
      >
        National News Headlines
      </Text>
      <Api />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "4%",
  },
});
export default News;
