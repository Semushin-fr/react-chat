import React from "react";
import {useSelector} from "react-redux";
import {useStyles} from "./SidebarStyles";

export const Sidebar = () => {
  const users = useSelector(state => state.chat.chatUsers);
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarTitle}>
        Users list
      </div>
      <ul className={classes.sidebarList}>
        {
          users.map(user => {
            return (
              <li key={user.id}>
                {user.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
