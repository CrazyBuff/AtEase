import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Linking } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PostAdmission({ navigation }) {
    const goHomeHandler = () => {
        navigation.push('HomePage');
    }

    const handleClick = () => {
        Linking.canOpenURL('https://www.health.vic.gov.au/primary-care/nurse-on-call').then(supported => {
          if (supported) {
            Linking.openURL('https://www.health.vic.gov.au/primary-care/nurse-on-call');
          } else {
            console.log("Don't know how to open URI: https://www.health.vic.gov.au/primary-care/nurse-on-call");
          }
        });
      };

  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Text style={styles.goodAfternoon}>Congratulations!</Text>
        <Text style={styles.leeChulSan}>Lee Chul-San</Text>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
        </View>
      </View>
      <View style={styles.rect4Row}>
        <View style={styles.rect4}><Text style={styles.text}>Recovery</Text></View>
        <View style={styles.rect5}><Text style={styles.text}>Counselling Services</Text></View>
      </View>
      <View style={styles.rect6Row}>
        <View style={styles.rect6}><TouchableOpacity onPress={handleClick}><Text style={styles.text}>Nurse On Call</Text></TouchableOpacity></View>
        <View style={styles.rect7}><Text style={styles.text}>Feedback</Text></View>
      </View>
      <View style={styles.rect8Row}>
        <View style={styles.rect8}><Text style={styles.text}></Text></View>
        <View style={styles.rect9}><Text style={styles.text}></Text></View>
      </View>
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
            source={require('../assets/notificationicon.png')}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require('../assets/usericon.png')}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(186,223,244,1)"
  },
  rect2: {
    width: 417,
    height: 242,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    marginLeft: -20,
    marginTop: -40,
    marginBottom: -10
  },
  goodAfternoon: {
    color: "#121212",
    fontSize: 30,
    marginTop: 70,
    marginLeft: 40
  },
  leeChulSan: {
    color: "#121212",
    fontSize: 25,
    marginLeft: 100
  },
  rect3: {
    top: 5,
    left: 0,
    width: 329,
    height: 38,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 316,
    position: "absolute",
    left: 14,
    top: 0
  },
  rect3Stack: {
    width: 330,
    height: 43,
    marginTop: 36,
    marginLeft: 42
  },
  rect4: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    alignItems: 'center',
          
  },
  rect5: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    marginLeft: 14,
    alignItems: 'center',
  },
  rect4Row: {
    height: 102,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 8,
    marginRight: 8
  },
  rect6: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    alignItems: 'center',
  },
  rect7: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    marginLeft: 14,
    alignItems: 'center',
  },
  rect6Row: {
    height: 102,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 8,
    marginRight: 8
  },
  rect8: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    alignItems: 'center',
  },
  rect9: {
    width: 180,
    height: 102,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    marginLeft: 14,
    alignItems: 'center',
  },
  rect8Row: {
    height: 102,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8
  },

  text: {
    fontSize: 20,
    padding: 1
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  rect10: {
    width: 423,
    height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 25
  },
  image2: {
    width: 60,
    height: 47,
    marginTop: 6
  },
  image: {
    width: 89,
    height: 65,
    marginLeft: 43
  },
  image3: {
    width: 95,
    height: 57,
    marginLeft: 33,
    marginTop: 6
  },
  image2Row: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 51,
    marginLeft: 42
  }
});