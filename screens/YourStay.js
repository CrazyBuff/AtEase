import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialMapView1 from "../components/MaterialMapView1";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function YourStay({ navigation }) {
  const goHomeHandler = () => {
    navigation.push('HomePage');
  }

  return (
    <View style={styles.container}>
      <View style={styles.rect10}>
        <View style={styles.image2Row}>
        <TouchableOpacity onPress={goHomeHandler}>
          <Image
            source={require('../assets/homeicon.png')}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
          <Image
            source={require("../assets/notificationicon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("../assets/usericon.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
      </View>
      <View style={styles.rect11}>
        <Text style={styles.yourStay}>Your Stay</Text>
        <Text style={styles.address}>[Address]</Text>
        <MaterialMapView1 style={styles.materialMapView1}></MaterialMapView1>
        <Text style={styles.itemsToBring}>Items to bring:</Text>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(186,223,244,1)"
  },
  rect10: {
    width: 423,
    height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 620
  },
  image2: {
    width: 70,
    height: 56,
    marginTop: 6
  },
  image: {
    width: 89,
    height: 72,
    marginLeft: 43
  },
  image3: {
    width: 95,
    height: 66,
    marginLeft: 33,
    marginTop: 6
  },
  image2Row: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 51,
    marginLeft: 42
  },
  rect11: {
    width: 380,
    height: 550,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27,
    marginTop: -730,
    marginLeft: 6,
    
  },
  yourStay: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35,
    marginTop: 23,
    marginLeft: 10
  },
  address: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 11
  },
  materialMapView1: {
    width: 360,
    height: 267,
    marginTop: 8,
    marginLeft: 10
  },
  itemsToBring: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 21,
    marginLeft: 11
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 29
  }
});


