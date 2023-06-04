// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let cities = [
  //   "Charleston",
  //   "North Charleston",
  //   "Mt. Pleasant",
  //   "Hanahan",
  //   "James Island",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={cities}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div className="alert alert-primary">
  //     <Alert>
  //       Hello <div>World</div>
  //     </Alert>
  //   </div>
  // );

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          You hit the button
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
