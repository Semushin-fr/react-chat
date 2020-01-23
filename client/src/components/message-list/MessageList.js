import React from "react";
import {useSelector} from "react-redux";
import {useStyles} from "./MessageListStyles";

export const MessageList = () => {
  const messages = useSelector(state => state.chat.messages);
  const classes = useStyles();

  return (
    <div className={classes.messageList}>
      <ul>
        {
          messages.map((m, index) => {
            return (
              <li key={index}>
                <span className={classes.messageListName}>
                  {m.owner_name}:
                </span> {m.text}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
