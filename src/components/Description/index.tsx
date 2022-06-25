import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { Text } from "./styles";

type DescriptionProps = {
  children: string;
}

const TextAnimation = Animated.createAnimatedComponent(Text);

const Description = ({ children }: DescriptionProps) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false
    }).start();
  }, []);

  return (
    <TextAnimation
      style={{
        opacity: opacityAnimation
      }}
    >
      { children }
    </TextAnimation>
  )
}

export default Description;