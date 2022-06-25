import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { Alt } from "./styles";

type IllustrationProps = {
  File: React.FC<SvgProps>;
  alt: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const AltAnimation = Animated.createAnimatedComponent(Alt);

const Illustration = ({
  File,
  alt,
  width,
  height,
  style
}: IllustrationProps) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false
    }).start();
  }, []);

  if (File) {
    return (
      <Animated.View style={{
        opacity: opacityAnimation
      }}>
        <File
          style={style}
          width={width ?? 200}
          height={height ?? 200}
        />
      </Animated.View>
    )
  }

  return (
    <AltAnimation style={{
      opacity: opacityAnimation
    }}>
      { alt }
    </AltAnimation>
  )
}

export default Illustration;