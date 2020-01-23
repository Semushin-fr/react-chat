import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  messageList: {
    width: '100%',
    height: '450px',
    overflowY: 'auto',
    padding: '20px',
    background: '#ffffff',
    border: '1px solid #4a76a8',
    borderBottom: 'none',
    borderLeft: 'none',
    borderTopRightRadius: '3px',
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        marginBottom: '10px',
        animationName: '$show',
        animationDuration: '.5s'
      }
    }
  },
  messageListName: {
    color: '#4a76a8',
    fontWeight: 'bold'
  },
  '@keyframes show': {
    '0%': {opacity: 0},
    '50%': {opacity: .5},
    '100%': {opacity: 1}
  }
});
