import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  header: {
    width: '100%',
    padding: '10px',
    background: '#4a76a8',
    margin: {
      bottom: '50px'
    },
    fontSize: '16px',
    color: '#ffffff',
    fontFamily: 'sans-serif'
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  headerUser: {},
  headerBtn: {
    display: 'inline-block',
    width: '120px',
    height: '40px',
    background: '#e5ebf1',
    textAlign: 'center',
    lineHeight: '40px',
    borderRadius: '3px',
    transition: '.5s',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    color: '#6d7c8a',
    textDecoration: 'none',
    margin: {
      left: '30px'
    },
    '&:hover': {
      background: '#d5d9dc'
    }
  }
});
