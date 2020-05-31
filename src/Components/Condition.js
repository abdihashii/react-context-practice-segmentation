import React, { useState, useEffect, useContext } from "react";
import update from "immutability-helper";
import { TargetingContext } from "../Contextes/TargetingContext";
import {
  types,
  selectOperatorList,
  stringTypeOperators,
} from "../Factories/ConditionEditFactory";

const Condition = ({ index, initialCondition }) => {
  const { items, setItems, handleRemoveItem } = useContext(TargetingContext);

  const [condition, setCondition] = useState(initialCondition);
  const [operators, setOperators] = useState(stringTypeOperators);

  const onConditionChange = ({ target: { name, value } }) => {
    setCondition(
      update(condition, {
        condition: {
          [name]: { $set: value },
        },
      })
    );

    if (name === "type") onTypeChange(value);
  };

  const onTypeChange = (type) => {
    let changedOperatorList = selectOperatorList(type);

    setOperators(changedOperatorList);

    setCondition(
      update(condition, {
        condition: {
          type: { $set: type },
          operator: { $set: "=" },
          literal: { $set: "" },
        },
      })
    );
  };

  useEffect(() => {
    setItems(
      update(items, {
        [index]: { $set: condition },
      })
    );
  }, [condition]);

  useEffect(() => {
    setOperators(selectOperatorList(initialCondition.condition.type));
  }, [items, initialCondition.condition.type]);

  return (
    <div className="condition">
      <h3>Condition {index + 1}</h3>

      {/* Attribute */}
      <input
        type="string"
        value={initialCondition.condition.attribute}
        name="attribute"
        onChange={onConditionChange}
      />

      {/* Type */}
      <select
        value={initialCondition.condition.type}
        name="type"
        onChange={onConditionChange}
      >
        {types.map((type, index) => {
          return (
            <option key={`type-${index}`} value={type}>
              {type}
            </option>
          );
        })}
      </select>

      {/* Operator */}
      <select
        value={initialCondition.condition.operator}
        name="operator"
        onChange={onConditionChange}
      >
        {operators.map((operator, index) => {
          return (
            <option key={`operator-${index}`} value={operator.stringForm}>
              {operator.menuLabel}
            </option>
          );
        })}
      </select>

      {/* Literal */}
      <input
        type="string"
        value={initialCondition.condition.literal}
        name="literal"
        onChange={onConditionChange}
      />

      <button type="button" onClick={() => handleRemoveItem(index)}>
        X
      </button>

      <pre>
        <code>{JSON.stringify(initialCondition)}</code>
      </pre>
    </div>
  );
};

export default Condition;
