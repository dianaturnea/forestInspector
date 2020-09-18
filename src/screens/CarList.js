import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import items from "../config/items";

const { width } = Dimensions.get("screen");

export default function CarList({ route }) {
  const [carList, setCarList] = useState(items);
  const { titleHeaderList } = route.params;

  const renderItem = ({ item }) => (
    <View style={[styles.item]}>
      <Image
        source={{
          uri: "https://image.flaticon.com/icons/png/512/31/31307.png",
        }}
        style={styles.imageStyle}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.details}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Button
        onPress={useCallback(() => setCarList([]), carList)}
        title="Remove cars"
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.headerTitle}>{titleHeaderList}</Text>
        )}
        ListHeaderComponentStyle={styles.headerStyle}
        style={styles.flatListStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    paddingVertical: 10,
  },
  headerStyle: {
    backgroundColor: "#2c3e50",
    height: 50,
    fontWeight: "bold",
    padding: 15,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  item: {
    flex: 1,
    height: 80,
    backgroundColor: "#ecf0f1",
    marginTop: 1,
    justifyContent: "center",
    padding: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageStyle: { width: 30, height: 30, margin: 20 },
  flatListStyle: { width, backgroundColor: "#bdc3c7" },
});
