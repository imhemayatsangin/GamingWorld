function ListGroup() {
  const Items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Watermelon",
  ];

  return (
    <>
      <h1>Group List</h1>
      <ul className="list-group">
        {Items.map((Items) => (
          <li className="list-group-item">{Items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
