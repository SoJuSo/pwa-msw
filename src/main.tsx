import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./GlobalStyle.tsx";
import { ManagedUIContext } from "./uiContext.tsx";
import { serviceWorker } from "./mock/browser.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const mock = async () => {
  await serviceWorker.start();
};

mock().then(() => {
  root.render(
    <React.StrictMode>
      <ManagedUIContext>
        <GlobalStyle />
        <App />
      </ManagedUIContext>
    </React.StrictMode>
  );
});
