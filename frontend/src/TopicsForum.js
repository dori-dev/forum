import "./Topic.css";
import { useEffect, useState } from "react";
import TopicForm from "./TopicForm";
import TopicList from "./TopicList";

function TopicsForum() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/forum/topics/")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <TopicForm />
      <TopicList items={topics} />
    </div>
  );
}

export default TopicsForum;
