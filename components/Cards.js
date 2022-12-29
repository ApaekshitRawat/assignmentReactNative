import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cards({ item }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  return (
    <View style={styles.div}>
      <TouchableOpacity
        onPress={() => {
          setCurrentIndex(item.key == currentIndex ? null : item.key);
        }}
        style={styles.tittle}
      >
        <Text style={styles.text}>{item.text}</Text>
        {item.key === currentIndex && (
          <Text style={styles.desc}>{item.desc}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
  },
  tittle: {
    flex: 1,
    padding: 60,
    marginVertical: 20,
    marginHorizontal: 50,
    elevation: 2,
    textAlign: "center",
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  desc: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: 8,
    fontSize: 15,
  },
});
