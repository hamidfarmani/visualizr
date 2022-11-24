import React, { createContext, useContext, useReducer } from "react";

export const InfoContext = createContext({
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

    default:
      throw Error("Undefined action");
  }
}

export const AppContext = ({ children }) => {
  const [infoState, dispatch] = useReducer(infoReducer, InfoContext);

  const generateNewArray = (arraySize) => {
    const array = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 300)
    );

    const objectArray = array.map((item, index) => {
      return { index: index, number: item };
    });

    dispatch({
      type: "GenerateNewArray",
      payload: {
        array: array,
        objectArray: objectArray,
      },
    });
  };

  const setArray = (modifiedArray) => {
    dispatch({
      type: "SetArray",
      payload: {
        array: modifiedArray,
      },
    });
  };

  return (
    <InfoContext.Provider value={{ infoState, generateNewArray, setArray }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(InfoContext);
};
