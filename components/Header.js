import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.header}>
      <Entypo name="menu" size={40} color="white" style={styles.icon2} />

      <Text style={styles.tittle}> Assignment !!</Text>

      <AntDesign name="user" size={25} color="white" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 80,
    marginTop: 75,
    marginBottom: 10,
    paddingTop: 25,
    backgroundColor: "#8e8e8e",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 2 },
  },
  tittle: {
    flex: 1,
    margin: "auto",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    paddingRight: 20,
  },
  icon2: {
    marginLeft: 10,
  },
});
