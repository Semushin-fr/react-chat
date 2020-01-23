import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  login: {
    width: '600px',
    margin: '0 auto',
    marginTop: '50px',
    '& h1': {
      color: '#4a76a8',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  loginFormInput: {
    border: '1px solid #6d7c8a',
    borderRadius: '3px',
    height: '40px',
    fontSize: '20px',
    outline: 'none',
    paddingLeft: '15px',
    marginBottom: '20px',
    color: '#6d7c8a',
    '&::placeholder': {
      color: '#6d7c8a'
    }
  },
  loginFormBtn: {
    height: '40px',
    outline: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    background: '#4a76a8',
    color: '#ffffff',
    borderRadius: '3px',
    transition: '.5s',
    fontWeight: 'bold',
    '&:hover': {
      background: '#5c8bbf'
    }
  },
  errorMessage: {
    color: '#ff0f3b',
    fontSize: '14px',
    padding: '10px 0',
    textDecoration: 'underline'
  }
});
