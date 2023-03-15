import { Server as HttpServer } from 'http';
import { Socket, Server } from 'socket.io';
import { removeUser, pushSocketIdToArray, emitNotifyToArray } from '../helpers/userSocket.helper'
import {
  BLUE_CLICK_EVENT,
  ORANGE_CLICK_EVENT,
  RESET_CLICK_EVENT,
  RESET_ORANGE_BLUE,
  UPDATE_BLUE_CLICK,
  UPDATE_ORANGE_CLICK
} from '../constants/socket.constant'
import logger from '../core/loggers'

require('dotenv').config()
export class ServerSocket {
  public static instance: ServerSocket;
  public io: Server;
  
  /** Master list of all connected users */
  public users: string[];

  constructor(server: HttpServer) {
    
    ServerSocket.instance = this;
    this.users = [];
    this.io = new Server(server, {
        serveClient: false,
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false,
        cors: {
            origin: process.env.FE_HOST
        }
    });

    this.io.on('connect', this.StartListeners);
  }

  StartListeners = (socket: Socket) => {
    logger.info('Message received from ' + socket.id)
    this.users = pushSocketIdToArray({socketId: socket.id, users: this.users})
    
    // you can receive socket id of user that clicked button
    socket.on(ORANGE_CLICK_EVENT, (payload: {socketId: string}) => {
      // emit all users
      emitNotifyToArray({
        users: this.users,
        socket: socket,
        data: payload,
        eventName: UPDATE_ORANGE_CLICK
      })
    });

    socket.on(BLUE_CLICK_EVENT, (payload: {socketId: string}) => {
      emitNotifyToArray({
        users: this.users,
        socket: socket,
        data: payload,
        eventName: UPDATE_BLUE_CLICK
      })
    })

    socket.on(RESET_CLICK_EVENT, (socketId: string) => {
      socket.to(socketId).emit(RESET_ORANGE_BLUE)
    })

    socket.on('disconnect', () => {
      logger.info('Disconnect received from: ' + socket.id);
      this.users = removeUser({socketId: socket.id, users: this.users})
    });
  };
}