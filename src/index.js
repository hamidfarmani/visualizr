import { Center, Loader } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext } from "./context/AppContext";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <Center>
          <Loader />
        </Center>
      }
    >
      <AppContext>
        <AppRouter />
      </AppContext>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
