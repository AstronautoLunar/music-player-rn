import { Text } from "./styles";

type DescriptionProps = {
  children: string;
}

const Description = ({ children }: DescriptionProps) => {
  return (
    <Text>{ children }</Text>
  )
}

export default Description;