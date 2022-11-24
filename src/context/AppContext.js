import React, { createContext, useContext, useReducer } from "react";

export const InfoContext = createContext({
  array: [],
  generateNewArray: () => {},
});

function infoReducer(state, action) {
  switch (action.type) {
    case "GenerateNewArray":
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

    dispatch({
      type: "GenerateNewArray",
      payload: {
        array: array,
      },
    });
  };

  return (
    <InfoContext.Provider value={{ infoState, generateNewArray }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(InfoContext);
};
