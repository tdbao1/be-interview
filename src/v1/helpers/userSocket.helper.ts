import { Socket } from "socket.io";

type SocketReceive = {
  socketId: string;
  users: string[]; 
}
interface EmitEventCustom {
  users: string[];
  eventName: string;
  data: any;
  socket: Socket
}

// Get current user
export const getCurrentUser = ({socketId, users}: SocketReceive) => users?.find(user => user === socketId);

// delete a user
export const removeUser = ({socketId, users}: SocketReceive) => users?.filter((user) => socketId !== user)


export const pushSocketIdToArray = ({socketId, users}: SocketReceive): string[] => {
  users.push(socketId)
  return users
};

export const emitNotifyToArray = ({users,socket,eventName,data}: EmitEventCustom) => {
  if (users.length > 0) {
    users.forEach(socketId => {
      socket.to(socketId).emit(eventName, data);
    })
  }
};



