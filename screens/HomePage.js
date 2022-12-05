import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Image,
  Button,
  Linking,
} from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { CardEight } from "react-native-card-ui";
import Card from "./Card";

const HomePage = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const supportedURL =
    "https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868589";

  const OpenURLButton = ({ url, contt, children }) => {
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
        <Text>{contt}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View>
        <ScrollView horizontal={true} style={styles.scrollContainer}>
          <View style={styles.containerH}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://pbs.twimg.com/media/D-mtpekUYAAly-8.png",
              }}
            />
          </View>
          <View style={styles.containerH}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://static.theprint.in/wp-content/uploads/2020/06/Presser.jpg",
              }}
            />
          </View>
          <View style={styles.containerH}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://www.livelaw.in/h-upload/2021/09/24/401278-abka-saath-sabka-vikas-sabka-vishwas-sabka-prayas.jpg",
              }}
            />
          </View>
          <View style={styles.containerH}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://images.moneycontrol.com/static-mcnews/2021/06/IAF-POC-7.jpg",
              }}
            />
          </View>
        </ScrollView>
      </View>
      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Press Information Bureau</Text>
      </Card>

      <View style={styles.release_container}>
        <Text style={styles.sectionTitle}> Press Releases ...</Text>
        <OpenURLButton
          url={supportedURL}
          contt={
            "PM to review site work progress of National Maritime Heritage Complex at Lothal on 18"
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868897"}
          contt={
            "Last date to submit application for National Means cum Merit Scholarship scheme exten..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868885"}
          contt={
            "First 11 awardees of WISER programme to promote participation of women in internation..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868876"}
          contt={
            "Shri Dharmendra Pradhan to kickstart public consultation on National Credit framework..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868869"}
          contt={
            "Union Minister Dr. Jitendra Singh reviews progress achieved in Week 2 of Special Camp..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868876"}
          contt={
            "A French Delegation led by Ms Chrysoula Zacharopoulou, Minister of State for Developm..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868876"}
          contt={
            "Compressed Bio Gas (CBG) is the need of the hour, and Government is taking all steps ..."
          }
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1868876"}
          contt={
            "Union Minister Dr Jitendra Singh launches Single Integrated Pensioners' Portal aimed ..."
          }
        ></OpenURLButton>
        <Button title=" + More"></Button>
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}> Image Gallery</Text>
        <CardEight
          image1={{
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          }}
          image2={{
            uri: "https://images.news18.com/ibnlive/uploads/2022/08/india-gate-delhi11-16604979253x2.jpg",
          }}
          image3={{
            uri: "https://images.hindustantimes.com/img/2022/08/14/1600x900/droupadi_murmu_1660486578465_1660486584594_1660486584594.PNG",
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>User: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}> GOI Links</Text>
        <OpenURLButton
          url={"https://mod.gov.in/"}
          contt={" >> Defence Ministry"}
        ></OpenURLButton>
        <OpenURLButton
          url={"https://agricoop.nic.in/en"}
          contt={" >> Agriculture Ministry"}
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.mohfw.gov.in/"}
          contt={" >> Health Ministry"}
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.education.gov.in/en"}
          contt={" >> Education Ministry"}
        ></OpenURLButton>
        <OpenURLButton
          url={"https://www.meity.gov.in/"}
          contt={" >> Information technology and communication Ministry"}
        ></OpenURLButton>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 80,
    width: "94%",
    backgroundColor: "#AED6F1",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    margin: 10,
  },
  anchor_button: {
    color: "#fff",
    width: "90%",
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: "gray",
    borderRadius: 10,
  },
  scrollContainer: {
    backgroundColor: "#E5E8E8",
  },
  release_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
  },
  info_container: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: "gray",
    borderRadius: 10,
  },
  tinyLogo: {
    width: 350,
    height: 200,
    marginVertical: 1,
    borderRadius: 7,
  },
  containerH: {
    alignItems: "center",
    borderColor: "gray",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  textStyle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 40,
  },
  sectionTitle: { fontWeight: "700", fontSize: 20 },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
