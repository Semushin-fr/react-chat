import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import "./login.css";
import {addChatUser, setUser, addChatUsers} from "../../store/actions/chat";
import withSocket from "../../components/hoc/withSocket";

const Login = ({socket, history}) => {
  const userRef = useRef();
  const dispatch = useDispatch();

  socket.addHandler('Login', (res) => {
    dispatch(setUser(res.payload));
    history.push('/chat');
  });

  socket.addHandler('NewUser', (res) => {
    dispatch(addChatUser(res.payload));
  });

  socket.addHandler('GetUserList', (res) => {
    dispatch(addChatUsers(res.payload.users));
  });

  const onLogin = (event) => {
    event.preventDefault();
    const user = {
      type: 'Login',
      data: {
        name: userRef.current.value || 'Guest'
      }
    };

    socket.getInstance().send(JSON.stringify(user));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={onLogin}>
        <input type="text" className="login-form__input" ref={userRef} />
        <button type="submit" className="login-form__btn">Login</button>
      </form>
    </div>
  )
};

export default withSocket()(Login);
