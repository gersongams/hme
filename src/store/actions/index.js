import {
  ADD_TIMER,
  GUESS_MENU,
  SET_GAME_STATUS,
  SET_ROLE,
  SET_SCREEN,
  SET_TIMER,
  SET_GUESS
} from "../types";

export const setRole = payload => ({ type: SET_ROLE, payload });

export const setScreen = payload => ({ type: SET_SCREEN, payload });

export const setGameStatus = payload => ({ type: SET_GAME_STATUS, payload });

export const guessMenu = payload => ({ type: GUESS_MENU, payload });

export const addTimer = payload => ({ type: ADD_TIMER, payload });

export const setTimer = payload => ({ type: SET_TIMER, payload });

export const setGuess = payload => ({ type: SET_GUESS, payload });
