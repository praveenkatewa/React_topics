import { useState } from "react";


function useDisplayToggle(initialView = "list") {
  
  const [displayMode, setDisplayMode] = useState(initialView);

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === "list" ? "grid" : "list"));
  };

  return [displayMode, toggleDisplayMode];
}

export default useDisplayToggle;
