import React from "react";
import { useState } from "react";
import Second from "./Component/Second";
import First from "./Component/First";


function App() {
  const [YES, setYES] = useState(false)

  return (
    <div className="bg-gray-200 w-full h-full">
      {YES === false && <First BUTTONYES={setYES}/>}
      {YES === true && <Second/>}
      
    </div>
  );
}

export default App;
