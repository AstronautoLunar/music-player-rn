/**COMPONENTS */
import { Area, Text } from "./styles"

/**TYPES */
import { Asset } from "expo-media-library";

const ItemMusic = ({ filename, duration }: Asset) => {
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

  return (
    <Area>
      <Text>
        { filename.slice(0, 28) + '...' }
      </Text>
      <Text>
        { convertSecondsInTimeline(duration) }
      </Text>
    </Area>
  )
}

export default ItemMusic;