import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import Cards from "./components/Cards.js";
import Header from "./components/Header";
import Navigator from "./routes/Stacknavigator";
import { useState } from "react";
export default function App() {
  const [info, setInfo] = useState([
    {
      text: "Test text1",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 1,
    },
    {
      text: "Test text2",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 2,
    },
    {
      text: "Test test3",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 3,
    },
    {
      text: "Test test4",
      desc: "This is test Data This is test Data This is Test data This is test DataThis is Test data This is test DataThis is Test data This is test Data ",
      key: 4,
    },
    {
      text: "Test test5",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 5,
    },
    {
      text: "Test test6",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 6,
    },
    {
      text: "Test test7",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 7,
    },
    {
      text: "Test test8",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 8,
    },
    {
      text: "Test test9",
      desc: "This is test Data This is test Data This is Test data This is test Data ",
      key: 9,
    },
  ]);
  return (
    <ImageBackground
      source={require("./assets/background3.webp")}
      style={styles.container}
    >
      <Header />
      <View style={styles.container}>
        <FlatList
          data={info}
          renderItem={({ item }) => <Cards item={item} />}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
