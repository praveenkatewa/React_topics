import React from "react";
import useDisplayToggle from "./useDisplayToggle"; // Import the custom hook

const DisplayToggleComponent = () => {
  const [displayMode, toggleDisplayMode] = useDisplayToggle("list");

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <button onClick={toggleDisplayMode}>
        Switch to {displayMode === "list" ? "Grid View" : "List View"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: displayMode === "grid" ? "1fr 1fr" : "1fr",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayToggleComponent;
