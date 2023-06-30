// import { Fragment } from "react";

function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
//Need to rename all the clases to className
// click  comand +d to select, several times , and delete all the items, then writte the correct name
//className , and escape , several times, to unselect the multiple items
export default ListGroup;
// reformated the code ussing prettier plugin
