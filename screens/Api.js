import React, { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default Api = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity
        title={children}
        onPress={handlePress}
        style={styles.anchor_button}
      >
        <Text style={styles.anchor_text}>Read More ...</Text>
      </TouchableOpacity>
    );
  };
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=modi&apiKey=a69383bb093749dcac80cbbc40ffd5ba&pageSize=10"
      );
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{
                borderWidth: 1,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "gray",
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Image
                style={{
                  height: 70,
                  width: 100,
                  borderRadius: 10,
                  marginRight: 10,
                }}
                source={{ uri: item.urlToImage }}
              />
              <View style={{ width: "60%" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                </View>
                <OpenURLButton url={item.url}></OpenURLButton>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  anchor_text: {
    color: "blue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "7%",
  },
});
