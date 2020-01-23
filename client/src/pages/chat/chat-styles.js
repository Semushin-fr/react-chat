import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  mainChat: {
    display: 'flex'
  },
  chat: {
    width: '100%'
  },
  chatError: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20px',
    fontSize: '14px',
    color: '#ffffff',
    background: '#ff0f3b'
  }
});
