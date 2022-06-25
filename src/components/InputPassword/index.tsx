/**CORE */
import { useRef, useEffect } from "react";
import { Animated } from "react-native";

/**STYLES */
import colors from "../../styles/colors";

/**COMPONENTS */
import { Input } from "./styles";

type InputPasswordProps = {
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputPassword = ({
  value,
  onChangeText
}: InputPasswordProps) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false
    }).start();
  }, [])
 
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder="Senha"
      placeholderTextColor={colors["USAFA Blue"]+ '50'}
      style={{
        opacity: opacityAnimation
      }}
    />
  )
};

export default InputPassword;