import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChatUser, setUser, addChatUsers} from "../../store/actions/chat";
import withSocket from "../../components/hoc/withSocket";
import {useStyles} from "./login-styles";

const Login = ({socket, history}) => {
  const [error, setError] = useState(false);
  const classes = useStyles();
  const userRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.chat.user);

  socket.addHandler('Login', res => {
    dispatch(setUser(res.payload));
    history.push('/chat');
  });

  socket.addHandler('NewUser', res => {
    dispatch(addChatUser(res.payload));
  });

  socket.addHandler('GetUserList', res => {
    dispatch(addChatUsers(res.payload.users));
  });

  socket.addError(() => {
    errorHandler()
  });

  socket.setReconnect(() => {
    if (user) {
      login(user.name);
    }
  });

  const login = (userName) => {
    const user = {
      type: 'Login',
      data: {
        name: userName || "Guest"
      }
    };
    socket.send(JSON.stringify(user));
  };

  const onLogin = (event) => {
    event.preventDefault();
    login(userRef.current.value)
  };

  const errorHandler = () => {
    setError(true);
  };

  const errorMess = error ? <div className={classes.errorMessage}>Отсутствует подключение к серверу</div> : null;
  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form className={classes.loginForm} onSubmit={onLogin}>
        <input
          type="text"
          className={classes.loginFormInput}
          ref={userRef}
          placeholder='Enter your name'
        />
        <button type="submit" className={classes.loginFormBtn}>Login</button>
      </form>
      {errorMess}
    </div>
  )
};

export default withSocket()(Login);
