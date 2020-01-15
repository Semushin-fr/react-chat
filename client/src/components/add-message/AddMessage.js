import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import "./AddMessage.css";
import {sendMessage} from "../../store/actions/chat";

export const AddMessage = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const message = {
      id: Date.now(),
      text: ref.current.value
    };
    dispatch(sendMessage(message));
    ref.current.value = ''
  };

  return (
    <div className="add-message">
      <form className="add-message-form" onSubmit={onSubmit}>
        <input type="text" className="add-message__input" ref={ref} />
        <button type="submit" className="add-message__btn">Send</button>
      </form>
    </div>
  )
};
