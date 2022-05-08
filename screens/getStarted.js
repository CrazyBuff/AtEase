import { StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, TouchableHighlight } from 'react-native';


export default function GetStarted({ navigation }) {

    const pressHandler = () => {
        navigation.push('HomePage');
    }

    return (
        <>
        <View style={background.container}>
        <View style={logoWtext.container}>
            <Image source={require('../assets/logoWtextwhite.png')} style={logoWtext.img}/>
        </View>
        <View style={introText.container}>
            <Text style={introText.text}>{'Your hospital journey'}</Text>
            <Text style={introText.text}>campanion to put</Text>
            <Text style={introText.text}>you @ ease!</Text>
        </View>
        <View style={buttonStyle.container}>
        
            <TouchableHighlight onPress={pressHandler}>
            <Text style={buttonStyle.text}>GET STARTED</Text>
            </TouchableHighlight>
        </View>
        </View>
      </>
    );
}


const background = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      padding: 0,
      backgroundColor: '#BADFF4',
    },
  });
  
  const introText = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold'
    }
  })
    
  const logoWtext = StyleSheet.create({
    container: {
      alignItems: 'center', 
      marginTop: '10%',
      marginBottom: '-20%'
    },
    img: {
      width: '100%',
      height: '50%'
    }
  })
  
  const buttonStyle = StyleSheet.create({
    container: {
      marginVertical: '4%',
      marginHorizontal: '23%',
      paddingVertical: '4%',
      paddingHorizontal: '5%',
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'black',
      backgroundColor: '#b3bbc7'
      
    },
    text: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold'
    }
  }) 