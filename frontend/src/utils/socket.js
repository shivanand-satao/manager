import io from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export const socket = io(SOCKET_URL);

export const joinEvent = (eventId) => {
  socket.emit('joinEvent', eventId);
};

export const leaveEvent = (eventId) => {
  socket.emit('leaveEvent', eventId);
};