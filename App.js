import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
          <Text>Forest Inspector</Text>
          <TextInput
            style={{
              backgroundColor: "green",
              width: 150,
              paddingHorizontal: 15,
              paddingVertical: 15,
              margin: 15,
            }}
            placeholder={"Car input"}
          />
        </View>
      </ScrollView>
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
});
