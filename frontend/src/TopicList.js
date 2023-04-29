import TopicListItem from "./TopicListItem";

function TopicList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <TopicListItem item={item} key={index} />
      ))}
    </div>
  );
}

export default TopicList;
