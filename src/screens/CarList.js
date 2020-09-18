import React, { useState, useCallback, useEffect } from "react";
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
  const [carList, setCarList] = useState([]);
  const { titleHeaderList } = route.params;

  const handleFetchCarList = useCallback(async () => {
    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        date0: "Fri, 19 Sep 2020 14:00:00 GMT",
        date1: "Fri, 19 Sep 2020 16:00:00 GMT",
        nrmasina: "",
        transportLocRecoltare: false,
        transportDepozit: false,
        transportFrontiera: false,
        transportTransbordare: false,
        transportConfiscare: false,
        transportAlteSituatii: true,
      }),
    };
    const result = await fetch(
      "http://inspectorulpadurii.ro/SumalSatelit/Ajax/HartaAvizeWoodTracking",
      options
    );
    const resultList = await result.json();

    setCarList(resultList);
  });

  useEffect(() => {
    handleFetchCarList();
  }, []);

  const renderItem = ({ item }) => (
    <View style={[styles.item]}>
      <Image
        source={{
          uri: "https://image.flaticon.com/icons/png/512/31/31307.png",
        }}
        style={styles.imageStyle}
      />
      <View>
        <Text style={styles.title}>{item.NRM}</Text>
        <Text>{item.ID}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={carList}
        renderItem={renderItem}
        keyExtractor={(item) => toString(item.ID)}
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
