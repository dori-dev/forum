import { useContext } from "react";
import { AppContext, actions } from "./AppContext";

function TopicListItem({ item }) {
  const { dispatch } = useContext(AppContext);

  function vote(vote) {
    fetch(`http://127.0.0.1:8000/forum/topics/${item.id}/vote/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        vote: vote,
      }),
    })
      .then((response) => {
        if (vote === "l") {
          dispatch({ type: actions.TOPIC_LIKED, topic: item });
        } else {
          dispatch({ type: actions.TOPIC_DISLIKED, topic: item });
        }
      })
      .catch((error) => console.log(error));
  }
  function like() {
    vote("l");
  }
  function dislike() {
    vote("d");
  }
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <small onClick={like}>{item.likes} Likes</small>
      <small onClick={dislike}>{item.dislikes} Dislikes</small>
    </div>
  );
}

export default TopicListItem;
