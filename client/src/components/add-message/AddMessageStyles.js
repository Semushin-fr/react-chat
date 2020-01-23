import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  addMessage: {
    width: '100%',
    border: '1px solid #4a76a8',
    borderLeft: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    borderBottomRightRadius: '3px'
  },
  addMessageForm: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  addMessageInput: {
    width: '100%',
    border: 'none',
    fontSize: '20px',
    outline: 'none',
    padding: '10px',
    color: '#6d7c8a'
  },
  addMessageBtn: {
    minWidth: '70px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: '#4a76a8',
    color: '#ffffff',
    fontSize: '16px',
    transition: '.5s',
    '&:hover': {
      background: '#5f8abb'
    }
  }
});
