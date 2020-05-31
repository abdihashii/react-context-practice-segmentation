import React, { useContext } from "react";
// import { v4 as uuid } from "uuid";
import Condition from "./Condition";
import { TargetingContext } from "../Contextes/TargetingContext";

const ItemsList = () => {
  const { segmentationRule, items } = useContext(TargetingContext);

  // const showItems = () => {
  //   return items.map((item, index) => {
  //     return (
  //       <Condition
  //         key={`condition-${index}`}
  //         index={index}
  //         initialCondition={item}
  //       />
  //     );
  //   });
  // };

  return (
    <div className="items-list-wrapper">
      <h2>Items List</h2>
      <div className="items-list-data">
        <pre>
          <code>{JSON.stringify(segmentationRule, null, 3)}</code>
        </pre>
      </div>
      <div className="items">
        {items.map((item, index) => {
          // console.log(item.condition.type);
          // console.log(item.condition.operator);
          return (
            <Condition
              key={`condition-${index}`}
              index={index}
              initialCondition={item}
            />
          );
        })}
        {/* {showItems()} */}
      </div>
    </div>
  );
};

export default ItemsList;
