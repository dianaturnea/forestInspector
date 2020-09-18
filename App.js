import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CarList from "./src/screens/CarList";

const { width } = Dimensions.get("screen");

function Home({ navigation }) {
  const onPressToGo = () => {
    navigation.navigate("CarList");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, styles.containerProps]}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Forest Inspector
        </Text>
      </View>
      <View style={[styles.mainContainer, styles.containerProps]}>
        <Image
          style={{ width: 200, height: 200, margin: 20 }}
          source={{
            uri:
              "https://i.pinimg.com/originals/31/bc/b4/31bcb437c29376a67742b4d5f502b721.png",
          }}
        />
        <Button
          onPress={onPressToGo}
          title="CarList Screen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={[styles.footerContainer, styles.containerProps]}>
        <Text>Programmers Week 2020</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarList" component={CarList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
