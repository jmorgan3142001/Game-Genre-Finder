// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //JS React Hook for changing states
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Sample Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  //   items = [];

  //   items.map((item) => <li>{item}</li>);

  //   const getMessage = () => {
  //     items.length === 0 ? <p>No item found</p> : null;
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/*In JS, if the first part is true, the functions returns 
      the second element, if false, it returns false*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
