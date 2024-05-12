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
import SVG, { Path } from "react-native-svg"
import { RootSiblingParent } from 'react-native-root-siblings'
import Toast from 'react-native-root-toast';

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

  const displayToast = () => {
    const toast = Toast.show('Toast message appears here', {duration: Toast.durations.LONG})
    const hideToast = () => {
      Toast.hide(toast);
    }
    setTimeout(hideToast, 3000)
  }

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
    // <View style={styles.appContainer}>
    //   <Text style={styles.appTitle}>Checkbox Example</Text>
    //   <View style={styles.checkboxContainer}>
    //     <MyCheckbox onChange={() => {return setChecked(!checked);}} checked={checked}/>
    //     <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
    //   </View>
    // </View>

    /* STACK VIEWS WITH ZINDEX */
    // <View style={styles.root}>
    //   <View
    //     style={[
    //       styles.containerZIndex,
    //       {
    //         backgroundColor: '#e1e4e8',
    //       }
    //     ]}>

    //     {/* zIndex:0 */}
    //     <View style={[styles.item, { backgroundColor: '#6638f0' }]}>
    //       <Text style={styles.itemLabel}>zIndex:0</Text>
    //     </View>

    //     {/* zIndex:1 */}
    //     <View style={[styles.item,
    //       {
    //         backgroundColor: '#5cc9f5',
    //         position: 'absolute',
    //         top: 32,
    //         left: 32,
    //         zIndex: 1,
    //       }]}>
    //       <Text style={styles.itemLabel}>zIndex:1</Text>
    //     </View>

    //     {/* zIndex:-1 */}
    //     <View style={[styles.item,
    //       {
    //         backgroundColor: '#4af2a1',
    //         marginTop: -16,
    //         zIndex: -1,
    //       }]}>
    //       <Text style={[styles.itemLabel, {color: 'black'}]}>zIndex:-1</Text>
    //     </View>

    //     {/* zIndex:2 */}
    //     {/* You can even make the component extend outside of the parent's visual bounds */}
    //     <View style={[styles.item,
    //       {
    //         backgroundColor: '#dfc73f',
    //         top: -160,
    //         left: -64,
    //         zIndex: 2,
    //       }]}>
    //       <Text style={[styles.itemLabel, {color: 'black'}]}>zIndex:2</Text>
    //     </View>

    //     {/* zIndex:-2 */}
    //     {/* An absolute position must still respect the zIndex*/}
    //     {/* But the elements are still with respect the and contained within the
    //       zIndex of their parent container */}
    //     <View style={[styles.item,
    //       {
    //         backgroundColor: '#3fdfcc',
    //         top: -192,
    //         left: -32,
    //         zIndex: 1,
    //       }]}>
    //       <Text style={[styles.itemLabel, {color: 'black'}]}>zIndex:-2</Text>
    //     </View>
    //   </View>
    // </View>

    /* Use SVGs */
    // <View style={styles.containerSVG}>
    //   <SVG
    //     width={20}
    //     height={20}
    //     viewBox="0 0 20 20"
    //   >
    //     <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
    //   </SVG>
    // </View>

    /* Display a popup toast */
    <RootSiblingParent>
      {/**
       * React-Native standaard library only supports toast for Android but, the
       * third-party react-native-root-toast allows for cross-platform toast messages.
       *
       * iOS systems don't actually have any native toast functionality.
       *
       * The root component must be wrapped by <RootSiblingParent>
       */}
      <View style={styles.containerSVG}>
        <Pressable
          style={{ padding: 10, borderWidth: 1, borderColor: "blue", borderRadius: 12 }}
          onLongPress={displayToast}
        >
          <Text>Toast Test (long press)</Text>
        </Pressable>
      </View>
    </RootSiblingParent>

  );
}

const styles = StyleSheet.create({
  /* ELEMENT IN FRONT OF BACKGROUND */
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
    backgroundColor: '#000000c0',
  },

  /* IMPLEMENT A CHECKBOX */
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
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
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },

  /* STACK VIEWS WITH ZINDEX */
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerZIndex: {
    height: 200,
    width: 200,
    borderRadius: 16,
    padding: 16,
    borderWidth: 8,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  item:{
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 48,
    width: 48,
    borderRadius: 8,
  },
  itemLabel: { // I made this, and this doesn't seem to do anything
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  /* Use SVGs */
  containerSVG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});