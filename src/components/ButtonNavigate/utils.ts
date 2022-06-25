import colors from "../../styles/colors";
import { themeTypes } from "./types";

function configThemeArea(props: themeTypes) {
  switch (props.nameTheme) {
    case "CTA":
      return colors['USAFA Blue'];

    case "Secundary":
      return colors['Gray'];

    default:
      return colors['USAFA Blue'];
  }
}

function configThemeText(props: themeTypes) {
  switch (props.nameTheme) {
    case "CTA":
      return colors['Beau Blue'];

    case "Secundary":
      return colors['Black'];

    default:
      return colors['Beau Blue'];
  }
}

export {
  configThemeArea,
  configThemeText
};