import { useState } from "react"
import { toast } from "react-toastify"
import { useMove } from "./useMove"
    import { useTakeDisc } from "./useTakeDisc"

export function useGame() {
    const [postItems, setPostItems] = useState({
    one: [
      // 7,6,5,4,
      3, 2, 1,
    ],
    two: [], 
    three: [],
  })

  const { movements, addMovement } = useMove()
        const { discTaken, dropDisc, grabDisc } = useTakeDisc()
  const handleMove = (post) => {
    const currentPostItems = postItems[post]

    if (discTaken.number) {
        handlePlace({ currentPostItems, post })
    } else {
      handleTakin({ currentPostItems, post })
    }
  }

  const handlePlace = ({ currentPostItems, post }) => {
    const newItems = { ...postItems }
    //placing
    if (
      currentPostItems.length > 0 &&
      currentPostItems[currentPostItems.length - 1] < discTaken.number
    ) {
      toast.error("invalid movement", { theme: "dark" })
      return
    }

    newItems[discTaken.fromPost].pop()
    newItems[post].push(discTaken.number)
    addMovement(discTaken.fromPost, post)
    dropDisc()
    setPostItems(newItems)
  }

  const handleTakin = ({ currentPostItems, post }) => {
    const newItems = { ...postItems }
    if (currentPostItems.lenght === 0) {
      return
    }
    //taking
    const numberTaken = currentPostItems[currentPostItems.length - 1]
    grabDisc(post, numberTaken)
    setPostItems(newItems)
  }

  return { postItems, handleMove, movements, discTaken }
}
