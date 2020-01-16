class CustomSocket {
  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onmessage = this._onMessage;
    this.socket.onopen = this._onOpen;
    this.handlers = {};
  };

  _onMessage = (res) => {
    const _res = JSON.parse(res.data);
    console.log(_res);
    this.handlers[_res.type] && this.handlers[_res.type](_res);
  };

  _onOpen = () => {
    console.log('WS connection successful');
  };

  addHandler(type, handler) {
    this.handlers[type] = handler;
  };

  getInstance() {
    return this.socket;
  };
}

const socket = new CustomSocket();

export default socket;
