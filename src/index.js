import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>

  // <Provider store={store}>

  // </Provider>
);
