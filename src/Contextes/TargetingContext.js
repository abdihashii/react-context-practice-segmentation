import React, { useState, useEffect, createContext } from "react";
import update from "immutability-helper";
import { defaultCondition } from "../Factories/ConditionEditFactory";

export const TargetingContext = createContext(null);

const TargetingContextProvider = (props) => {
  const [segmentationRule, setSegmentationRule] = useState({
    comment: null,
    expression: {
      items: [
        {
          condition: {
            attribute: "X",
            type: "date",
            operator: "after",
            literal: "1",
          },
        },
        {
          condition: {
            attribute: "Y",
            type: "number",
            operator: ">=",
            literal: "20",
          },
        },
        {
          condition: {
            attribute: "Z",
            type: "string",
            operator: "=",
            literal: '"Z"',
          },
        },
      ],
    },
  });
  const [items, setItems] = useState(segmentationRule.expression.items);

  const handleAddItem = (itemType) => {
    if (itemType === "condition") {
      setItems(update(items, { $push: [defaultCondition] }));
    }
  };

  const handleRemoveItem = (index) => {
    setItems(update(items, { $splice: [[index, 1]] }));
  };

  useEffect(() => {
    setSegmentationRule(
      update(segmentationRule, { expression: { items: { $set: items } } })
    );
  }, [items]);

  return (
    <TargetingContext.Provider
      value={{
        segmentationRule,
        items,
        setItems,
        handleAddItem,
        handleRemoveItem,
      }}
    >
      {props.children}
    </TargetingContext.Provider>
  );
};

export default TargetingContextProvider;
