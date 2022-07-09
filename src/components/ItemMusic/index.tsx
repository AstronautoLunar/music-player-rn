/**CORE */
import { useRef } from "react";
import { Animated } from "react-native";

/**COMPONENTS */
import { 
  Area, 
  Text, 
  PressArea 
} from "./styles"

/**TYPES */
import { Asset } from "expo-media-library";

/**CONTEXTS */
import { useMusic } from "../../contexts/MusicContext";

const AreaAnimated = Animated.createAnimatedComponent(Area);

const ItemMusic = ({ filename, duration, uri, id }: Asset) => {
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const { setCurrentMusic, audioObject } = useMusic();
  
  function createZero(value: number): string {
    return value > 9 ? String(value) : `0${value}`;
  }

  function convertSecondsInTimeline(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    let notation = "";

    if (hours) {
      notation += `${createZero(hours)}:`;
    }

    if (minutes) {
      notation += `${createZero(minutes)}:`;
    }

    if (seconds) {
      notation += `${createZero(seconds)}`
    }

    return notation;
  }

  function saveMusic() {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setCurrentMusic({
      id,
      uri,
      currentTimer: 0,
      durationTotal: duration,
      isPlay: true,
      name: filename
    });
  }

  return (
    <PressArea onPress={saveMusic}>
      <AreaAnimated 
        style={{
          transform: [
            { scale: scaleAnimation }
          ]
        }}
      >
        <Text>
          { filename.slice(0, 28) + '...' }
        </Text>
        <Text>
          { convertSecondsInTimeline(duration) }
        </Text>
      </AreaAnimated>
    </PressArea>
  )
}

export default ItemMusic;