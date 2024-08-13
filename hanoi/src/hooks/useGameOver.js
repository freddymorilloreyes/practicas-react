import { useEffect, useState } from "react"

export function useGameOver({ postItems }) {
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (postItems.three.length == 3) {
      setGameOver(true)
    }
  }, [postItems])

  return { gameOver }
}
