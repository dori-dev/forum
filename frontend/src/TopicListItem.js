function TopicListItem({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <small>{item.likes} Likes</small>
      <small>{item.dislikes} Dislikes</small>
    </div>
  );
}

export default TopicListItem;
