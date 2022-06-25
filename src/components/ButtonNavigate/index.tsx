/**CORE */
import { useRef, useEffect } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import { Area, Text, PressArea } from "./style"

/**TYPES */
import { themeProps } from "./types";

type ButtonNavigateProps = themeProps & {
  children: string;
  onPress?: () => void;
  width?: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonNavigate = ({ children, onPress, width, style, nameTheme }: ButtonNavigateProps) => {
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false
    }).start();
  }, []);

  function goAnimateButton() {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 0.9,
        duration: 150,
        useNativeDriver: false
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
      }),
    ]).start();
  }

  return (
    <PressArea 
      width={width}
      onPress={() => {
        goAnimateButton();

        if (onPress) {
          onPress();
        }
      }}
      style={style}
    >
      <Area
        nameTheme={nameTheme}
        style={{
          transform: [
            { scale: scaleAnimation }
          ],
          opacity: opacityAnimation
        }}
        
      >
        <Text nameTheme={nameTheme}>
          { children }
        </Text>
      </Area>
    </PressArea>
  )
}

export default ButtonNavigate;