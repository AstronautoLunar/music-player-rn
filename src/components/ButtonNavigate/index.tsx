import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { Area, Text, PressArea } from "./style"

type ButtonNavigateProps = {
  children: string;
  onPress: () => void;
}

const ButtonNavigate = ({ children, onPress }: ButtonNavigateProps) => {
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
    <PressArea onPress={() => {
      goAnimateButton();

      onPress();
    }}>
      <Area style={{
        transform: [
          { scale: scaleAnimation }
        ],
        opacity: opacityAnimation
      }}>
        <Text>{ children }</Text>
      </Area>
    </PressArea>
  )
}

export default ButtonNavigate;