import { Animated, View, ViewProps } from "react-native";
import { ThemedStyledProps } from "styled-components";

type themeProps = {
  nameTheme: "CTA" | "Secundary";
}

type themeTypes = ThemedStyledProps<Animated.AnimatedProps<ViewProps & React.RefAttributes<View>> & {
  children?: React.ReactNode;
} & themeProps, any>;

export type {
  themeProps,
  themeTypes
};