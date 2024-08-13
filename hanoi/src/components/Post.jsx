/* eslint-disable react/prop-types */
import { Disc } from "./Disc"

export function Post({ discItems, handleMove, post, discTaken }) {
  return (
    <ul className="tower" id="tower-1" onClick={() => handleMove(post)}>
      {discItems.map((number) => (
        <Disc key={number} number={number} discTaken={discTaken} />
      ))}
    </ul>
  )
}
