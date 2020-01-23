import React, {useRef} from "react";
import {useStyles} from "./AddMessageStyles";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../store/actions/chat";
import withSocket from "../hoc/withSocket";

const AddMessage = ({socket}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const classes = useStyles();

  socket.addHandler('SendMessage', res => {
    dispatch(sendMessage(res.payload))
  });

  const onSubmit = event => {
    event.preventDefault();
    socket.send(JSON.stringify({
      type: 'SendMessage',
      data: {
        text: inputRef.current.value
      }
    }));
    inputRef.current.value = ''
  };

  return (
    <div className={classes.addMessage}>
      <form className={classes.addMessageForm} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Start typing...'
          className={classes.addMessageInput}
          ref={inputRef}
        />
        <button type="submit" className={classes.addMessageBtn}>Send</button>
      </form>
    </div>
  )
};

export default withSocket()(AddMessage);
