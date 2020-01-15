import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import "./login.css";
import {addChatUser, setUser} from "../../store/actions/chat";

export const Login = ({history}) => {
  const userRef = useRef();
  const dispatch = useDispatch();

  const onLogin = (event) => {
    event.preventDefault();
    const user = {
      id: Date.now(),
      name: userRef.current.value || 'Guest'
    };
    dispatch(setUser(user));
    dispatch(addChatUser(user));
    history.push('/chat');
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
