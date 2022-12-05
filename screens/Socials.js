import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Api from "./Api";
import { WebView } from "react-native-webview";

const DATA = [
  {
    id: "tweet4",
    height: 400,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Melinda Gates, Co-Chair, Bill and Melinda Gates Foundation calls on Union Minister <a href="https://twitter.com/mansukhmandviya?ref_src=twsrc%5Etfw">@mansukhmandviya</a><br> <br>Union Minister &amp; Melinda Gates unveiled a report titled Grassroot Soldiers: Role of ASHAs and ANMs in the COVID-19 Pandemic Management in India <br><br>🔗<a href="https://t.co/4UcVDriJ3H">https://t.co/4UcVDriJ3H</a> <a href="https://t.co/Q1ZKbsUD5j">pic.twitter.com/Q1ZKbsUD5j</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1599774098783363074?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet5",
    height: 500,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/MIBDailyWrap?src=hash&amp;ref_src=twsrc%5Etfw">#MIBDailyWrap</a> | 05-12-2022<br><br>🔹President <a href="https://twitter.com/hashtag/DroupadiMurmu?src=hash&amp;ref_src=twsrc%5Etfw">#DroupadiMurmu</a> interacted with students and women achievers at Padmavati Women’s University, Tirupati<br><br>🔹Foreign Minister <a href="https://twitter.com/DrSJaishankar?ref_src=twsrc%5Etfw">@DrSJaishankar</a> met the German Foreign Minister <a href="https://twitter.com/ABaerbock?ref_src=twsrc%5Etfw">@ABaerbock</a>, who is on a 2-day visit to India, in New Delhi<a href="https://twitter.com/PIB_India?ref_src=twsrc%5Etfw">@PIB_India</a> <a href="https://t.co/5Tr0uj5Y2c">pic.twitter.com/5Tr0uj5Y2c</a></p>&mdash; Ministry of Information and Broadcasting (@MIB_India) <a href="https://twitter.com/MIB_India/status/1599777245932896256?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet6",
    height: 350,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Discussions on India’s <a href="https://twitter.com/hashtag/G20?src=hash&amp;ref_src=twsrc%5Etfw">#G20</a> Priorities begin on Day 2 of the 1st Sherpa Meeting of India’s G20 Presidency in Udaipur, Rajasthan<br><br>Read here: <a href="https://t.co/MvWbLCcsrc">https://t.co/MvWbLCcsrc</a> <a href="https://twitter.com/hashtag/G20India?src=hash&amp;ref_src=twsrc%5Etfw">#G20India</a> <a href="https://twitter.com/g20org?ref_src=twsrc%5Etfw">@g20org</a> <a href="https://t.co/i54RLldmMa">pic.twitter.com/i54RLldmMa</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1599761322845278208?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet9",
    height: 680,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Serving a healthy Indian diet to the <a href="https://twitter.com/hashtag/G20?src=hash&amp;ref_src=twsrc%5Etfw">#G20</a> family! <br><br>Celebrating the <a href="https://twitter.com/hashtag/InternationalYearOfMillets?src=hash&amp;ref_src=twsrc%5Etfw">#InternationalYearOfMillets</a> the delegates at Udaipur were served a nutritious meal with multiple millet options on the menu. <a href="https://twitter.com/hashtag/G20India?src=hash&amp;ref_src=twsrc%5Etfw">#G20India</a> <a href="https://t.co/q3MQzxnaMj">pic.twitter.com/q3MQzxnaMj</a></p>&mdash; G20 India (@g20org) <a href="https://twitter.com/g20org/status/1599785033275146240?ref_src=twsrc%5Etfw">December 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet3",
    height: 340,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">PM <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Etfw">@narendramodi</a> dedicates 75 Digital Banking Units across 75 districts to the nation via video conferencing,<br><br>This is a measure to further deepen financial inclusion, promote digital financial literacy &amp; educate customers on cyber security awareness and safeguards <a href="https://t.co/LH3EmFDbbV">pic.twitter.com/LH3EmFDbbV</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1581527039663669248?ref_src=twsrc%5Etfw">October 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet1",
    height: 370,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Prime Minister <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Etfw">@narendramodi</a> will inaugurate the 2-day PM Kisan Samman Sammelan-2022 on 17th October in New Delhi<a href="https://t.co/ufdgb19ZyQ">https://t.co/ufdgb19ZyQ</a> <a href="https://t.co/oH1Z5NLlIQ">pic.twitter.com/oH1Z5NLlIQ</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1581257589622308865?ref_src=twsrc%5Etfw">October 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
  {
    id: "tweet2",
    height: 500,
    url: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">PM <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Etfw">@narendramodi</a> addresses the inaugural session of All India Conference of Law Ministers and Law Secretaries in Ekta Nagar, Gujarat via video message<br><br>1/n<a href="https://t.co/JI6Ai10Npw">https://t.co/JI6Ai10Npw</a> <a href="https://t.co/uDdga3qtIm">pic.twitter.com/uDdga3qtIm</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1581203756443521025?ref_src=twsrc%5Etfw">October 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  },
];
function Socials() {
  const renderItem = ({ item }) => (
    <>
      <WebView
        style={{ height: item.height, width: 500 }}
        source={{ html: item.url }}
      />
    </>
  );
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "7%",
  },
});
export default Socials;
