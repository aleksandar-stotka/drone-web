import React from "react";

const Buttons = ({ onhadleCategory }) => {
  return (
    <div>
      <button onClick={() => onhadleCategory("dron")}>clisk</button>
      <button onClick={() => onhadleCategory("DELOVI")}>clisk</button>
    </div>
  );
};

export default Buttons;
