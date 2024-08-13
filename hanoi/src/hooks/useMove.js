import { useState } from "react"

export function useMove() {
  const [movements, setMovements] = useState(0)

  const addMovement = (fromPost, toPost) => {
    if (fromPost != toPost) {
      setMovements(movements + 1)
    }
  }

  return { movements, addMovement }
}
