import TopicListItem from "./TopicListItem";

function TopicList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <TopicListItem item={item} />
      ))}
    </div>
  );
}

export default TopicList;
