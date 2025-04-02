import { Heading } from "./components/Heading";
import { Container } from "./components/Container";

import "./styles/themes.css";
import "./styles/global.css";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
