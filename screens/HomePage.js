import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";


export default function HomePage({ navigation }) {

    const pressHandlerOne = () => {
        navigation.push('PreAdmission');
    }

    const pressHandlerTwo = () => {
        navigation.push('PostAdmission')
    }


    return (
    <View style={styles.container}>
        <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={styles.image}
        ></Image>
        <View style={styles.rect}>
            <View style={styles.rect4}><TouchableOpacity onPress={pressHandlerOne} style={buttonStyle.container}><Text style={buttonStyle.text}>PRE-ADMISSION</Text></TouchableOpacity></View>
            <View style={styles.rect3}><TouchableOpacity onPress={pressHandlerTwo} style={buttonStyle.container}><Text style={buttonStyle.text}>POST-ADMISSION</Text></TouchableOpacity></View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(186,223,244,1)"
    },
    image: {
      width: 357,
      height: 309,
      marginTop: 15,
      marginLeft: 20
    },
    rect: {
      width: 352,
      height: 325,
      backgroundColor: "#E6E6E6",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 32,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        height: -5,
        width: 0
      },
      elevation: 5,
      shadowOpacity: 0.17,
      shadowRadius: 0,
      marginTop: 18,
      marginLeft: 20
    },
    rect4: {
      width: 270,
      height: 66,
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 16,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        height: -2,
        width: 0
      },
      elevation: 15,
      shadowOpacity: 0.28,
      shadowRadius: 5,
      overflow: "visible",
      marginTop: 65,
      marginLeft: 41
    },
    rect3: {
      width: 270,
      height: 66,
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 16,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        height: -2,
        width: 0
      },
      elevation: 15,
      shadowOpacity: 0.28,
      shadowRadius: 5,
      overflow: "visible",
      marginTop: 58,
      marginLeft: 41
    }
  });

  const buttonStyle = StyleSheet.create({
      text: {
          fontSize: 30
      },
      container: {
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 10
      }
  })