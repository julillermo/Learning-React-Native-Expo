import {
  Gesture,
  GestureDetector
} from 'react-native-gesture-handler'

import
Animated,
{
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
/**
 * So far, the components loaded from `react-native-reanimated`
 * `react-native-gesture-handler` work by replacing common react-native components
 * such as <View> and <Image>.
 *
 * These will resepctively become <Animated.View> and <Animated.Image>
 *
 * They can even take on the same props as the original components they're swapping
 */

export default function EmojiSticker({ imageSize, stickerSource }) {
  const originalScaleImage = imageSize;
  const scaleImage = useSharedValue(imageSize);
  const rotationImage = useSharedValue('0deg');
  // The above is like useState(), but it's a custom hook that helps with animation
  // "It helps to mutate a piece of data and allows running animations based on the
  //  current value. A shared value can be accessed and modified using the `.value`
  //  property."
  // This also likely has something to do with how only values stored within a
  //  state are what get properly rendered by Reactjs.

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value === originalScaleImage) {
        scaleImage.value = scaleImage.value * 2;
        rotationImage.value = '45deg';
      } else {
        scaleImage.value = originalScaleImage;
        rotationImage.value = '0deg';
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
      transform: [{ rotate: rotationImage.value }],
    }
  })

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    })

  // Since these entere the 'style' attribute, they are very likely
  // CSS-related or CSS-adjacent keywords
  // Sure enough, they can be found on the MDN documentation
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ]
    }
  })

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, {top: -350}]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}