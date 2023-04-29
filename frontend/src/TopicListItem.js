import { useState } from "react";

function TopicListItem({ item }) {
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDisLikes] = useState(item.dislikes);
  function vote(vote) {
    fetch("http://127.0.0.1:8000/forum/votes/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        topic: item.id,
        vote: vote,
      }),
    })
      .then((response) => {
        if (vote === "l") {
          setLikes(likes + 1);
        } else {
          setDisLikes(dislikes + 1);
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
      <small onClick={like}>{likes} Likes</small>
      <small onClick={dislike}>{dislikes} Dislikes</small>
    </div>
  );
}

export default TopicListItem;
