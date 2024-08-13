import { Disc } from "./Disc";

export function Post({ discItems, handleMove, post }) {
  return (
    <ul className="tower" id="tower-1" onClick={() => handleMove(post)}>
      {discItems.map((number) => (
        <Disc key={number} number={number} />
      ))}
    </ul>
  );
}
