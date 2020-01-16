import React from "react";
import {useSelector} from "react-redux";
import "./MessageList.css";

export const MessageList = () => {
  const messages = useSelector(state => state.chat.messages);

  return (
    <div className="message-list">
      <ul>
        {
          messages.map((m, index) => {
            return (
              <li key={index}>
                {m.owner_name}: {m.text}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
