import React from "react";
import {useSelector} from "react-redux";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {MessageList} from "../../components/message-list/MessageList";
import AddMessage from "../../components/add-message/AddMessage";
import {Header} from "../../components/header/Header";
import './chat.css';

export const Chat = ({history}) => {
  const user = useSelector(state => state.chat.user);
  if (!user) {
    history.push('/');
  }
  return (
    <>
      <Header/>
      <div className="container">
        <div className="main-chat">
          <Sidebar/>
          <div className="chat">
            <MessageList/>
            <AddMessage/>
          </div>
        </div>
      </div>
    </>
  )
};
