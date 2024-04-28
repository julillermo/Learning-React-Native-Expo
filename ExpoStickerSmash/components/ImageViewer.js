import { 
  StyleSheet,
  Image,
  View,
} from "react-native";

export default function ImageViewer ({ placeholderImageSource }) {
  return (
    <Image 
      source={placeholderImageSource}
      style={styles.image}
      onTouchStart={() => {alert('you touched a picture.')}}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})