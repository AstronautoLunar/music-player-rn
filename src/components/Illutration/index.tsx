import { SvgProps } from "react-native-svg";
import { Alt } from "./styles";

type IllustrationProps = {
  File: React.FC<SvgProps>;
  alt: string;
  size?: number;
}

const Illustration = ({
  File,
  alt,
  size
}: IllustrationProps) => {
  if (File) {
    return (
      <File
        width={size ?? 200}
      />
    )
  }

  return <Alt>{ alt }</Alt>
}

export default Illustration;