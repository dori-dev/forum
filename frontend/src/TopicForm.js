function TopicForm({ onCreateItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCreateItem({
      title: e.target.title.value,
      description: e.target.description.value,
    });
    e.target.title.value = "";
    e.target.description.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" name="title" />
        <br />
        <br />
        <label>Description</label>
        <br />
        <textarea name="description" rows="5"></textarea>
        <br />
        <br />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TopicForm;
