import { StatusBar } from 'expo-status-bar';
import {
  GestureResponderEvent,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  useState,
} from 'react';
import { Ionicons } from '@expo/vector-icons'

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

function MyCheckbox({ onChange, checked }: {onChange: (event: GestureResponderEvent)=>void; checked: boolean}) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}
    >
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  )
}

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    /* ELEMENT IN FRONT OF BACKGROUND */
    // <View style={styles.container}>
    //   <ImageBackground source={image} style={styles.image}>
    //     <Text style={styles.text}>Element</Text>
    //     <Text style={styles.text}>in Front of</Text>
    //     <Text style={styles.text}>Background</Text>
    //   </ImageBackground>
    // </View>

    /* IMPLEMENT A CHECKBOX */
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Checkbox Example</Text>
      <View style={styles.checkboxContainer}>
        <MyCheckbox onChange={() => {return setChecked(!checked);}} checked={checked}/>
        <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },


  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});