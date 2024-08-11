import { useEffect, useState } from 'react'
import './App.css'
import { Post } from './componentes/Post'
import { toast } from 'react-toastify'
import { GameOverModal } from './componentes/GameOverModal'

function App() {

  const [postItems, setPostItems] = useState({
    one: [1],
    two: [],
    three: []
  })
  const [discTaken, setDiscTaken] = useState({fromPost:null, number:null})
  const [gameOver, setGameOver] = useState(false)
  const [movements, setMovements] = useState(0)

  const addMovement = ()=>{
      setMovements(movements+1)
  }

  const handleMove = (post) =>{
    const newItems = {...postItems}
    const currentPost = newItems[post]
      
      
      if (discTaken.number) {
        //placing 
        if (
          currentPost.length > 0 && 
          currentPost[currentPost.length-1] > discTaken.number
        ){
            toast.error('invalid movement',{theme:'dark'})
            return
        }
        
        newItems[post].push(discTaken.number)
        setDiscTaken({fromPost:null, number:null})
        setPostItems(newItems)
        addMovement()
      }else{
        if(currentPost.lenght === 0 ){return}
        //taking
        const numberTaken = newItems[post].pop()
        setDiscTaken({fromPost:post, number:numberTaken})
        setPostItems(newItems)
      }
  }

  useEffect(()=>{
    if (postItems.three.length == 1) {
      setGameOver(true)
    }
    
  },[postItems])

  return (
    <>
      Hanoi
      <Post discItems={postItems.one} handleMove={handleMove} post={'one'}/>
      <Post discItems={postItems.two} handleMove={handleMove} post={'two'}/>
      <Post discItems={postItems.three} handleMove={handleMove} post={'three'}/>
      <GameOverModal open={gameOver} movements={movements}/>
    </>
  )
}

export default App
