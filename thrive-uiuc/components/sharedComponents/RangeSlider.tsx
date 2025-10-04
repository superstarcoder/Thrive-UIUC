import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView, GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import Color from "../../styles/Color";
import { runOnJS } from "react-native-reanimated";

const SLIDER_WIDTH = 220;
const SLIDER_HANDLE_RADIUS = 27;

Animated.addWhitelistedNativeProps({ text: true });

type Props = {
  min: number;
  max: number;
  initValue1: number;
  initValue2: number;
  onValue1Change: (newVal: number) => void;
  onValue2Change: (newVal: number) => void;
};

// number = percentage * (max - min) + min
// percentage = (number - min) / (max - min)
// slider position = percentage * MAX_VALUE
// offsetValue is the slider position based on calculations
// offsetValueSnapped is the slider position snapped to the nearest value within the range of possible values

const RangeSlider = ({ min, max, initValue1, initValue2, onValue1Change, onValue2Change }: Props) => {

  // calculate initial positions

  const MIN_VALUE = 0;
  const MAX_VALUE = SLIDER_WIDTH - SLIDER_HANDLE_RADIUS;
  const initPercent1 = (initValue1 - min) / (max - min);
  const initPercent2 = (initValue2 - min) / (max - min);

  const initPos1 = initPercent1 * (MAX_VALUE);
  const initPos2 = initPercent2 * (MAX_VALUE);

  const offsetValue1 = useSharedValue(initPos1);
  const offsetValue1Snapped = useSharedValue(initPos1);
  const offsetValue2 = useSharedValue(initPos2);
  const offsetValue2Snapped = useSharedValue(initPos2);

  // const offsetValue2 = useSharedValue(SLIDER_WIDTH - SLIDER_HANDLE_RADIUS);

  const pan1 = Gesture.Pan().onChange((event) => {
    offsetValue1.value += event.changeX;
    if (offsetValue1.value < MIN_VALUE) offsetValue1.value = MIN_VALUE;
    if (offsetValue1.value > offsetValue2.value) {
      offsetValue1.value = offsetValue2.value;
    }

    let newPercent = offsetValue1.value / MAX_VALUE;
    let newValue1 = Math.floor(newPercent * (max - min) + min);
    runOnJS(onValue1Change)(newValue1);

    // snap newValue1 to (newValue1 - min) / (max - min)

    // 50 for 0-100
    // (newValue1 / max) * MAX_VALUE
    let newSnappedPos = (newValue1 / max) * MAX_VALUE;
    offsetValue1Snapped.value = newSnappedPos;
    // offsetValue1.value = newSnappedPos;

    if (Math.floor(offsetValue2Snapped.value) == Math.floor(offsetValue1Snapped.value) && offsetValue2Snapped.value != 0) {
      offsetValue1Snapped.value -= SLIDER_HANDLE_RADIUS/2
    }
  });

  const pan2 = Gesture.Pan().onChange((event) => {
    offsetValue2.value += event.changeX;
    if (offsetValue2.value > MAX_VALUE) offsetValue2.value = MAX_VALUE;
    if (offsetValue2.value < offsetValue1.value) {
      offsetValue2.value = offsetValue1.value;
    }

    let newPercent = offsetValue2.value / MAX_VALUE;
    let newValue2 = Math.floor(newPercent * (max - min) + min);
    runOnJS(onValue2Change)(newValue2);

    let newSnappedPos = (newValue2 / max) * MAX_VALUE;
    offsetValue2Snapped.value = newSnappedPos;

  });

  const sliderHandleStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetValue1Snapped.value }],
  }));

  const sliderHandleStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetValue2Snapped.value }],
  }));

  const sliderBarFilledStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: offsetValue1Snapped.value + SLIDER_HANDLE_RADIUS / 2 - 8,
    width: offsetValue2Snapped.value - offsetValue1Snapped.value + 16,
    backgroundColor: Color.purple,
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.sliderTrack}>
        <Animated.View style={[styles.sliderTrack, sliderBarFilledStyle]} />
        <GestureDetector gesture={pan1}>
          <Animated.View style={[styles.sliderHandle, sliderHandleStyle1]} />
        </GestureDetector>
        <GestureDetector gesture={pan2}>
          <Animated.View style={[styles.sliderHandle, sliderHandleStyle2]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 27,
    backgroundColor: Color.grayBlue,
    borderRadius: 25,
    justifyContent: "center",
  },
  sliderHandle: {
    width: SLIDER_HANDLE_RADIUS + 2,
    height: SLIDER_HANDLE_RADIUS + 2,
    backgroundColor: "black",
    borderRadius: 20,
    // borderWidth: 1,
    borderColor: Color.darkBlue,
    position: "absolute",
    left: 0,
  },
});
