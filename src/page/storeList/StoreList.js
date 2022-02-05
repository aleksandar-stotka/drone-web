import React from "react";

import { useGlobalContext } from "../../context";

const StoreList = () => {
  const { closeSubmenu } = useGlobalContext();
  return <div className="row">store list</div>;
};

export default StoreList;
