import React, { useState, useEffect } from "react";
// npm i react-redux
import { connect } from "react-redux";

import { NavHashLink } from "react-router-hash-link";
import classes from "./Navigation.module.css";

import { FaSignOutAlt } from "react-icons/fa";

function NavigationItems(props) {
  /******** LOG OUT HANLDLING ********/
  const [showLogOutIcon, setShowLogOutIcon] = useState(false);

  useEffect(() => {
    if (props.userIsLogged) {
      setShowLogOutIcon(
        <>
          <li className={classes.NavigationItem}>
            <NavHashLink
              to="/login"
              // activeClassName={classes[props.classProps]}
              onClick={props.logoutHandler}
            >
              <h4
                className={[
                  classes.OlaUserMobile,
                  classes.DesktopDontShow,
                ].join(" ")}
              >
                LOG OUT
              </h4>
              <FaSignOutAlt size={28} />
            </NavHashLink>
          </li>
        </>
      );
    } else {
      setShowLogOutIcon(null);
    }
  }, [props.userIsLogged]);
  /******** LOG OUT HANLDLING - END ********/

  return (
    <>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Home
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/procurar#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Procurar
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/sobre#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          ?Sobre?
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/contato#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          ?Contato?
        </NavHashLink>
      </li>
      {showLogOutIcon}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userIsLogged: state.login.isLogged,
  };
};

export default connect(mapStateToProps)(NavigationItems);
