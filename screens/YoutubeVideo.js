import React, { useState, useCallback, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"zL9fPQv2H3I"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"gdELmSS2HoA"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"bahPADKLrt0"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"MjonAt5wJOU"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"zL9fPQv2H3I"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"IL5zpeweLNw"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"srjYq9vdrUM"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"gxujzXI2W9w"}
          onChangeState={onStateChange}
        />

        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"cr_Yqz-_OSE"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"V0dzYoGIPes"}
          onChangeState={onStateChange}
        />
        <YoutubePlayer
          height={200}
          width={300}
          play={playing}
          videoId={"_wJw3hb1Q58"}
          onChangeState={onStateChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> + Load More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginVertical: 20,
  },
  textStyle: {
    marginTop: 10,
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
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
