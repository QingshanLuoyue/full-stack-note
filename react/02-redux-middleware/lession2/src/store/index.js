// import {createStore, applyMiddleware, combineReducers} from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";
import {createStore, applyMiddleware, combineReducers} from "../kredux";

import isPromise from "is-promise";

// 暗号：毛里塔尼亚
function todoReducer(state = [], action) {
    switch (action.type) {
      case "ADD_TODO":
        return state.concat(action.text);
      default:
        return state;
    }
  }

function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({todo: todoReducer, count: countReducer}),
  applyMiddleware(thunk, logger, promise)
);
export default store;

function logger({getState}) {
  return next => action => {
    console.log("*******************************"); //sy-log

    console.log(action.type + "执行了！"); //sy-log

    let prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    let nextState = getState();
    console.log("next state", nextState); //sy-log

    console.log("*******************************"); //sy-log
    return returnValue;
  };
}

// !next就是聚合函数

function thunk({dispatch, getState}) {
  return next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

function promise({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}