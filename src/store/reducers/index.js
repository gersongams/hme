import {
  ADD_TIMER,
  SET_GAME_STATUS,
  SET_ROLE,
  GUESS_MENU,
  SET_SCREEN,
  SET_TIMER,
  SET_GUESS
} from "../types";
import screens from "../../utils/screens";
import { wordMatcher } from "../../utils/functions";

const initialState = {
  menu: [
    {
      id: 1,
      name: "Hamburger",
      question:
        "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
      price: 10
    },
    {
      id: 2,
      name: "Pizza",
      question:
        "The most known italian food. It's the first thing you can think of eating with friends.",
      price: 10
    },
    {
      id: 3,
      name: "Calzone",
      question:
        "An Italian oven-baked folded pizza that originated in Naples in the 18th century. Is made from salted bread dough",
      price: 3
    },
    {
      id: 4,
      name: "Pepsi",
      question: "Coke or...",
      price: 1
    },
    {
      id: 5,
      name: "French Fries",
      question: `They are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly
        appear on the menus of diners, fast food restaurants, pubs, and bars. They are also called as Finger Chips?`,
      price: 10
    }
  ],
  timers: [
    { id: 1, label: 10, isSelected: true },
    { id: 2, label: 20, isSelected: false }
  ],
  guess: {},
  matched: 0,
  role: "ADMIN",
  screen: screens.auth,
  gameStatus: "PLAYING"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUESS:
      return {
        ...state,
        guess: action.payload,
        gameStatus: "PLAYING"
      };
    case GUESS_MENU:
      const { win, numMatched } = wordMatcher(state.guess, action.payload);

      const newState = {
        ...state,
        matched: numMatched
      };

      if (win) {
        newState.gameStatus = "SUCCESS";
      }

      return newState;
    case SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload
      };
    case ADD_TIMER:
      const timers = state.timers;
      const updatedTimer = timers.map(i => ({ ...i, isSelected: false }));
      const lastId = timers[timers.length - 1].id;
      const newTimers = [
        ...updatedTimer,
        { id: lastId + 1, label: action.payload, isSelected: true }
      ];
      return {
        ...state,
        timers: newTimers
      };
    case SET_TIMER:
      const updatedTimers = state.timers.map(i => ({
        ...i,
        isSelected: false
      }));
      const foundIndex = updatedTimers.findIndex(x => x.id == action.payload);
      updatedTimers[foundIndex].isSelected = true;
      return {
        ...state,
        timers: updatedTimers
      };
    case SET_SCREEN:
      return {
        ...state,
        screen: action.payload
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
