import React from "react";

import NavItems from "../NavItems";
import classes from "./SideDrawer.module.css";

function SideDrawer(props) {
  return (
    <div
      className={[classes.SideDrawerContainer, classes[props.classAux]].join(
        " "
      )}
    >
      <NavItems toggle={props.toggle} logoutHandler={props.logoutHandler} />
    </div>
  );
}

export default SideDrawer;
