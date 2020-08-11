import React, { useEffect, useState } from "react";
// npm i react-redux
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions/actionsIndex";

import classes from "./Navigation.module.css";

import NavigationItems from "./NavItems";
import SideDrawer from "./SideDrawer";
// npm i react-icons
// https://react-icons.github.io/react-icons/
import { FaBars } from "react-icons/fa";

function Navigation(props) {
  const [showSideNav, setShowSideNav] = useState("");

  // On Scroll Changing:
  const [listener, setListener] = useState(null);
  const [status, setStatus] = useState("top");

  useEffect(() => {
    setListener(
      document.addEventListener("scroll", (e) => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (status !== "amir") {
            setStatus("amir");
          }
        } else {
          if (status !== "top") {
            setStatus("top");
          }
        }
      })
    );
  }, [listener, status]);

  useEffect(() => {
    if (props.toggleSideDrawer) {
      setShowSideNav(
        <>
          <SideDrawer
            logoutHandler={logoutHandler}
            toggle={toggleHandle}
            classAux="SideDrawerIn"
          />
        </>
      );
    } else {
      setShowSideNav(
        <>
          <SideDrawer
            logoutHandler={logoutHandler}
            toggle={toggleHandle}
            classAux="SideDrawerOut"
          />
        </>
      );
      //   setShowSideNav("");
    }
  }, [props.toggleSideDrawer]);

  function toggleHandle() {
    props.onToggleSideDrawer();
  }

  function logoutHandler() {
    props.onLogout();
  }

  return (
    <>
      <div className={classes.NavMobile}>{showSideNav}</div>
      <div
        style={{
          backgroundColor: status === "top" ? "transparent" : "black",
        }}
        className={classes.backgroundOnScroll}
      />
      <div className={classes.AppContainer}>
        <FaBars onClick={toggleHandle} className={classes.Bars} size={35} />

        <div className={classes.NavContainer}>
          <ul className={classes.NavigationItems}>
            <NavigationItems
              logoutHandler={logoutHandler}
              //   classProps="active"
            />
          </ul>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    toggleSideDrawer: state.global.toggleSideDrawer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleSideDrawer: () => dispatch(actionTypes.toggleSideDrawer()),
    onLogout: () => dispatch(actionTypes.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
