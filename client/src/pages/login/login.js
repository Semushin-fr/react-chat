import React, {Component, createRef} from "react";
import {connect} from 'react-redux';
import "./login.css";
import {addChatUser, setUser, addChatUsers} from "../../store/actions/chat";
import withSocket from "../../components/hoc/withSocket";

class Login extends Component {
  constructor(props) {
    super(props);
    this.userRef = createRef();

    this.props.socket.addHandler('Login', (res) => {
      this.props.setUser(res.payload);
      this.props.history.push('/chat');
    });

    this.props.socket.addHandler('NewUser', (res) => {
      this.props.addChatUser(res.payload);
    });

    this.props.socket.addHandler('GetUserList', (res) => {
      this.props.addChatUsers(res.payload.users);
    });
  }

  onLogin = (event) => {
    event.preventDefault();
    const user = {
      type: 'Login',
      data: {
        name: this.userRef.current.value || 'Guest'
      }
    };
    this.props.socket.getInstance().send(JSON.stringify(user));
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form className="login-form" onSubmit={this.onLogin}>
          <input
            type="text"
            className="login-form__input"
            ref={this.userRef}
            placeholder='Enter your name'
          />
          <button type="submit" className="login-form__btn">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setUser,
  addChatUsers,
  addChatUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withSocket()(Login));
