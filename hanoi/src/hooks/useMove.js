import { useState } from "react";

export function useMove() {
  const [movements, setMovements] = useState(0);

  const addMovement = () => {
    setMovements(movements + 1);
  };

  return { movements, addMovement };
}
