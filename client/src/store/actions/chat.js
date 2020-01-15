import {ADD_CHAT_USER, SEND_MESSAGE, SET_USER} from "../types";

export const sendMessage = (message) => ({type: SEND_MESSAGE, payload: message});
export const setUser = (user) => ({type: SET_USER, payload: user});
export const addChatUser = (user) => ({type: ADD_CHAT_USER, payload: user});
