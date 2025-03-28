import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        aspernatur, neque atque, laboriosam nihil veniam eius rerum suscipit
        architecto accusamus officia at sunt similique ipsa blanditiis pariatur
        eligendi incidunt dolores?
      </p>
    </>
  );
}
