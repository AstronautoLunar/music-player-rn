/**CORE */
import { useRef, useEffect } from "react";
import { Animated, StyleProp } from "react-native";

/**STYLES */
import { Text } from "./styles";

/**TYPES */
import { TextProps } from "./styles"; 

type DescriptionProps = TextProps & {
  children: string;
  style?: any;
}

const TextAnimation = Animated.createAnimatedComponent(Text);

const Description = ({ 
  children,
  color,
  style
}: DescriptionProps) => {
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
        opacity: opacityAnimation,
        ...style
      }}
      color={color}
    >
      { children }
    </TextAnimation>
  )
}

export default Description;