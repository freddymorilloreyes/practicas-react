import { Post } from "./Post"
import { GameOverModal } from "./GameOverModal"
import { useGame } from "../hooks/useGame"
import { useGameOver } from "../hooks/useGameOver"

export function Canvas() {
  const { postItems, handleMove, movements, discTaken } = useGame()
  const { gameOver } = useGameOver({ postItems })

  return (
    <>
      <GameOverModal open={gameOver} movements={movements} />
      <div id="canvas">
        <div className="restart">
          <i className="fa fa-repeat"></i>
        </div>
        <div className="curtain"></div>
        <ul id="score-panel">
          <li>
            <h1>
              {" "}
              <span id="moves-num">{movements}</span>
              <span> Moves</span>
            </h1>
          </li>
        </ul>
        <Post discItems={postItems.one} handleMove={handleMove} post={"one"} discTaken={discTaken} />
        <Post discItems={postItems.two} handleMove={handleMove} post={"two"} discTaken={discTaken} />
        <Post
          discItems={postItems.three}
          handleMove={handleMove}
          post={"three"}
          discTaken={discTaken}
        />
      </div>
    </>
  )
}
