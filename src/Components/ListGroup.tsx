function ListGroup() {
  const Items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Watermelon",
    "Grapes",
    "Pineapple",
  ];

  return (
    <>
      <h1>Group List</h1>
      <ul className="list-group">
        {Items.map((Item) => (
          <li className="list-group-item" key={Item}>
            {Item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
