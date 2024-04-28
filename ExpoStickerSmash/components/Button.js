import {
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome" // FontAwesome is an icon-set form the expo ion icon pack

export default function Button({ label, theme }) {


  return (theme === "primary")
    ? (
      // The inline styles override the preset loaded through the styles object.
      // I don't get why this uses a list to setup the styling instead of object with destructued ori
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => { alert('You pressed a button.') }}
        >
          <FontAwesome 
            name='picture-o'
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]} >{label}</Text>
        </Pressable>
      </View>
    )
    : (
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => { alert("You pressed a buitton.") }}
        >
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  buttonContainer:{
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
})