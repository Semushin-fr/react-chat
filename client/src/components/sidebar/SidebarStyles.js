import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  sidebar: {
    width: '400px',
    height: '500px',
    background: '#ffffff',
    border: '1px solid #4a76a8',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px'
  },
  sidebarTitle: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#4c7296',
    textTransform: 'uppercase',
    padding: '20px',
    borderBottom: '1px solid #4a76a8'
  },
  sidebarList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '& li': {
      padding: '10px',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      transition: '.5s'
    },
    '& li:hover': {
      background: '#e9f0f1'
    }
  }
});
