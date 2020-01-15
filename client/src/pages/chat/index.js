import React from "react";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {MessageList} from "../../components/message-list/MessageList";
import {AddMessage} from "../../components/add-message/AddMessage";

export const Chat = () => {
  return (
    <div className="container">
      <Sidebar/>
      <div className="chat">
        <MessageList/>
        <AddMessage/>
      </div>
    </div>
  )
};
