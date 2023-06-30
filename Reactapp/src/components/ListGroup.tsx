// import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "San Francisco"];

  // please check the name of the item is different from the list array, called items, (plural)
  // also take in consideration to render the item, in a dinamic way must be in brackets
  // check the map funtion in javascript
  // wrap expresion in brackets,  select + option + 8, save it .
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
//Need to rename all the clases to className
// click  comand +d to select, several times , and delete all the items, then writte the correct name
//className , and escape , several times, to unselect the multiple items
export default ListGroup;
// reformated the code ussing prettier plugin
