import { Illustration, ButtonNavigate, Description } from "../../components";
import { Screen, Container } from "./styles";
import { Lock } from "../../svgs";

const PasswordScreen = () => {
  return (
    <Screen>
      <Illustration
        File={Lock}
        width={300}
        height={200}
        alt="Cadeado"
        style={{
          marginTop: 24
        }}
      />
      <Description>
        Quer configurar uma senha para entrar no app?
      </Description>
      <Container>
        <ButtonNavigate 
          nameTheme="Secundary"
          style={{ marginBottom: 16 }}
        >
          Continuar
        </ButtonNavigate>
        <ButtonNavigate
          nameTheme="CTA"
        >
          Configurar Chave
        </ButtonNavigate>
      </Container>
    </Screen>
  )
};

export default PasswordScreen;