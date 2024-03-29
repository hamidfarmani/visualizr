import React, { createContext, useContext, useReducer } from "react";

export const InfoContext = createContext({
  speed: 100,
  array: [],
  objectArray: [],
  generateNewArray: () => {},
});

function infoReducer(state, action) {
  switch (action.type) {
    case "GenerateNewArray":
      return action.payload;

    case "SetArray":
      return action.payload;

    case "SetSpeed":
      return action.payload;

    default:
      throw Error("Undefined action");
  }
}

export const AppContext = ({ children }) => {
  const [infoState, dispatch] = useReducer(infoReducer, InfoContext);

  const generateNewArray = (arraySize) => {
    const array = Array.from({ length: arraySize }, () =>
      Math.floor(10 + Math.random() * (500 - 10 + 1))
    );

    const objectArray = array.map((item, index) => {
      return { index: index, number: item, color: "purple" };
    });

    dispatch({
      type: "GenerateNewArray",
      payload: {
        ...infoState,
        array: array,
        objectArray: objectArray,
      },
    });
  };

  const setArray = (modifiedArray) => {
    const objectArray = modifiedArray.map((item, index) => {
      return { index: index, number: item, color: "purple" };
    });
    dispatch({
      type: "SetArray",
      payload: {
        ...infoState,
        array: modifiedArray,
        objectArray: objectArray,
      },
    });
  };

  const setSpeed = (newSpeed) => {
    dispatch({
      type: "SetSpeed",
      payload: {
        ...infoState,
        speed: newSpeed,
      },
    });
  };

  return (
    <InfoContext.Provider
      value={{ infoState, generateNewArray, setArray, setSpeed }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(InfoContext);
};
