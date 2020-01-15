import React from "react";
import {useSelector} from "react-redux";
import "./Sidebar.css";

export const Sidebar = () => {
  const users = useSelector(state => state.chat.chatUsers);
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
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
