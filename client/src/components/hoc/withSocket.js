import React from 'react';
import {SocketConsumer} from "../socket-context/socket-context";

const withScoket = () => (Wrapped) => {
  return props => {
    return (
      <SocketConsumer>
        {
          (socket) => {
            return(
              <Wrapped {...props}  socket={socket} />
            )
          }
        }
      </SocketConsumer>
    )
  }
};

export default withScoket;
