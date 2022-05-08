import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, TouchableHighlight } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import Navigator from './routes/HomeStack';


export default function App() {
  return (  
    <Navigator/>

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
    marginTop: '35%',
    marginBottom: '-20%'
  },
  img: {
    width: '100%',
    height: '50%'
  }
})

const buttonStyle = StyleSheet.create({
  container: {
    marginVertical: '15%',
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