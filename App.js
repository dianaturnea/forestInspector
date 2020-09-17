import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Button,
  Switch,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
export default function App() {
  const onPressLearnMore = () => {
    console.log("Button");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.headerContainer, styles.containerProps]}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Forest Inspector
        </Text>
      </View>
      <View style={[styles.mainContainer, styles.containerProps]}>
        <ScrollView style={{ width }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
          />
          <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

          <Image
            style={{ width: 200, height: 200, margin: 20 }}
            source={{
              uri:
                "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
            }}
          />
          <Image
            style={{ width: 200, height: 200, margin: 20 }}
            source={{
              uri:
                "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
            }}
          />
          <Image
            style={{ width: 200, height: 200, margin: 20 }}
            source={{
              uri:
                "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
            }}
          />
          <Image
            style={{ width: 200, height: 200, margin: 20 }}
            source={{
              uri:
                "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
            }}
          />
          <Image
            style={{ width: 200, height: 200, margin: 20 }}
            source={{
              uri:
                "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
            }}
          />
          <TextInput
            style={{
              width: 150,
              paddingHorizontal: 15,
              paddingVertical: 15,
              margin: 15,
              borderWidth: 1,
              borderColor: "green",
            }}
            placeholder={"Car input"}
          />
        </ScrollView>
      </View>
      <View style={[styles.footerContainer, styles.containerProps]}>
        <Text>Programmers Week 2020</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "#1abc9c",
    flex: 0.2,
  },
  mainContainer: {
    backgroundColor: "#ecf0f1",
    flex: 1,
  },
  footerContainer: {
    backgroundColor: "#16a085",
    flex: 0.1,
  },
  containerProps: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
});
