// GOOGLE MAPS EMBED:
// Find the address on Google Maps / SHARE / EMBED

import React from "react";
import classes from "./style.module.css";

export default function SimpleMap(props) {
  return (
    <iframe title="Maps" className={classes.mapFooter} src={props.location} />
  );
}
