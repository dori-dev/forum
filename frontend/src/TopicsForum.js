import "./Topic.css";
import { useEffect, useContext } from "react";
import { AppContext, actions } from "./AppContext";
import TopicForm from "./TopicForm";
import TopicList from "./TopicList";

function TopicsForum() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/forum/topics/")
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.TOPIC_LOADED, topics: data }))
      .catch((error) => console.log(error));
  }, []);
  function createItem(topic) {
    fetch("http://127.0.0.1:8000/forum/topics/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(topic),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.TOPIC_CREATED, topic: data }))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <TopicForm onCreateItem={createItem} />
      <TopicList items={state.topics} />
    </div>
  );
}

export default TopicsForum;
