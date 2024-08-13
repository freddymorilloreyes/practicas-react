import { useState } from "react"

export function useTakeDisc() {
  const [discTaken, setDiscTaken] = useState({
    fromPost: null,
    number: null,
  })

  const dropDisc = () => {
    setDiscTaken({ fromPost: null, number: null })
  }

  const grabDisc = (post, number) => {
    setDiscTaken({ fromPost: post, number: number })
  }

  return { discTaken, dropDisc, grabDisc }
}
