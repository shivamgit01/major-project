import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const Events = () => {
  const handlePress = () => {
    const url =
      "https://www.livemint.com/news/india/pm-modi-launches-single-brand-bharat-here-s-what-it-means-for-farmers-11665992782803.html";
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL`);
    }
  };

  return (
    <ScrollView>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Ministry of Agriculture & Farmers</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.hindustantimes.com/img/2021/10/22/1600x900/f7569ca6-32a3-11ec-a581-90b85644888b_1634844150661_1634866677258.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Prime Minister Shri Narendra Modi will inaugurate 2-day PM Kisan
            Samman Sammelan-2022 on 17th October in New Delhi
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Ministry of Agriculture & Farmers</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.hindustantimes.com/img/2021/10/22/1600x900/f7569ca6-32a3-11ec-a581-90b85644888b_1634844150661_1634866677258.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Prime Minister Shri Narendra Modi will inaugurate 2-day PM Kisan
            Samman Sammelan-2022 on 17th October in New Delhi
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Ministry of Agriculture & Farmers</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.hindustantimes.com/img/2021/10/22/1600x900/f7569ca6-32a3-11ec-a581-90b85644888b_1634844150661_1634866677258.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Prime Minister Shri Narendra Modi will inaugurate 2-day PM Kisan
            Samman Sammelan-2022 on 17th October in New Delhi
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Ministry of Agriculture & Farmers</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.hindustantimes.com/img/2021/10/22/1600x900/f7569ca6-32a3-11ec-a581-90b85644888b_1634844150661_1634866677258.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Prime Minister Shri Narendra Modi will inaugurate 2-day PM Kisan
            Samman Sammelan-2022 on 17th October in New Delhi
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Ministry of Agriculture & Farmers</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.hindustantimes.com/img/2021/10/22/1600x900/f7569ca6-32a3-11ec-a581-90b85644888b_1634844150661_1634866677258.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Prime Minister Shri Narendra Modi will inaugurate 2-day PM Kisan
            Samman Sammelan-2022 on 17th October in New Delhi
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Vande Bharat Express</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://c.ndtvimg.com/2019-02/uoc7umk_vande-bharat-express-pti-_625x300_19_February_19.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            पांचवीं वंदे भारत एक्सप्रेस पटरी पर दौड़ने को तैयार, 10 नवंबर को
            दिखाई जाएगी हरी झंडी
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.container}>
        <Card.Content>
          <Title>Election Commision of India</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_700x394/public/2020/12/28/136528-eci.jpg",
          }}
        />
        <Card.Content>
          <Paragraph>
            Himachal Pradesh polls on November 12, counting on December 8;
            Gujarat notice awaited
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.container}>
        <Card.Content>
          <Title>Geeks For Geeks</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png",
          }}
        />
        <Card.Content>
          <Paragraph>A Computer Science portal for Geeks</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePress}>Read more...</Button>
        </Card.Actions>
      </Card>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> + Load More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Events;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 30,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
