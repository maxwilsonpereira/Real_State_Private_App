import React from "react";

// npm install --save react-animate-on-scroll
// https://www.npmjs.com/package/react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";
// IMPORTANT: ***************************
// ADD "animate.min.css" file to ./utilities/animate.min.css
// and import into App.js
// If dos not work:
// ADD TO index.HTML <head> ... </head>: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
// YOU CAN USE THE ANIMATIONS FROM:
// https://animate.style/
// EXAMPLES: fadeIn / zoomIn /zoomInLeft / fadeOutDown / pulse
// EXAMPLES:
// https://dbramwell.github.io/react-animate-on-scroll/

import classes from "./style.module.css";

function MessageGold(props) {
  return (
    <div className={classes[props.background]}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
        <h1 className={classes.containerApp}>{props.text}</h1>
      </ScrollAnimation>
    </div>
  );
}
export default MessageGold;
