import { Disc } from "./Disc";

export function Post ({discItems, handleMove, post}){
    return(
        <button onClick={()=>handleMove(post)}>
        {discItems.map((number)=>
            <Disc key={number} number={number} handleMove={handleMove} post={post}/>
        )}
        </button>
    )
}