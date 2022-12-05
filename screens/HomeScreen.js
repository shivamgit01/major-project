import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubeVideo from "./YoutubeVideo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Socials from "./Socials";
import Events from "./Events";
import HomePage from "./HomePage";
import News from "./News";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Live") {
            iconName = "play-circle";
          } else if (route.name === "Events") {
            iconName = "ios-calendar";
          } else if (route.name === "Social") {
            iconName = "logo-twitter";
          } else if (route.name === "News") {
            iconName = "logo-buffer";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Live" component={YoutubeVideo} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Social" component={Socials} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
