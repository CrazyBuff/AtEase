import { StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, TouchableHighlight } from 'react-native';


export default function Login() {
    return (
    <>
    <View style={background.container}>
        <View style={logoStyle.container}>
            <Image source={require('../assets/logo.png')} style={logoStyle.img}/>
        </View>
        <View style={signInStyle.container}><Text style={signInStyle.text}>SIGN IN</Text></View>
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

const logoStyle = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginTop: '5%',
        marginBottom: '-60%'
    },
    img: {
        width: '100%',
        height: '60%'
    }
})

const signInStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderTopWidth: 3
    },
    text: {
        fontSize: 30
    }
})