import React, { useContext } from "react";
import ItemsList from "./ItemsList";
import "../Builder.css";
import { TargetingContext } from "../Contextes/TargetingContext";

const Builder = () => {
  const { handleAddItem } = useContext(TargetingContext);

  return (
    <div className="builder">
      <h2>Builder Component</h2>
      <ItemsList />
      <div className="btns">
        <button type="button" onClick={() => handleAddItem("condition")}>
          Add condition
        </button>
      </div>
    </div>
  );
};

export default Builder;
