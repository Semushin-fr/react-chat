import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useStyles} from "./HeaderStyles";

export const Header = ({history}) => {
  const user = useSelector(state => state.chat.user);
  const classes = useStyles();

  if (!user) {
    history.push('/');
    return null
  }

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerInner}>
          <div className={classes.headerUser}>
            {user.name}
          </div>
          <Link to="/" className={classes.headerBtn}>
            Logout
          </Link>
        </div>
      </div>
    </header>
  )
};
