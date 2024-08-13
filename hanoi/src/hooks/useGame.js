import { useState } from "react";
import { toast } from "react-toastify";
import { useMove } from "./useMove";

export function useGame() {
  const [postItems, setPostItems] = useState({
    one: [
      // 7,6,5,4,
      3, 2, 1,
    ],
    two: [],
    three: [],
  });

  const [discTaken, setDiscTaken] = useState({
    fromPost: null,
    number: null,
  });

  const { movements, addMovement } = useMove();
  const handleMove = (post) => {
    const currentPostItems = postItems[post];

    if (discTaken.number) {
      handlePlace({ currentPostItems, post });
    } else {
      handleTakin({ currentPostItems, post });
    }
  };

  const handlePlace = ({ currentPostItems, post }) => {
    const newItems = { ...postItems };
    //placing
    if (
      currentPostItems.length > 0 &&
      currentPostItems[currentPostItems.length - 1] < discTaken.number
    ) {
      toast.error("invalid movement", { theme: "dark" });
      return;
    }

    newItems[post].push(discTaken.number);
    setDiscTaken({ fromPost: null, number: null });
    setPostItems(newItems);
    addMovement();
  };

  const handleTakin = ({ currentPostItems, post }) => {
    const newItems = { ...postItems };
    if (currentPostItems.lenght === 0) {
      return;
    }
    //taking
    const numberTaken = newItems[post].pop();
    setDiscTaken({ fromPost: post, number: numberTaken });
    setPostItems(newItems);
  };

  return { postItems, handleMove, movements };
}
