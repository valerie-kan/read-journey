import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "modern-normalize/modern-normalize.css";
import "./index.css";

import { store, persistor } from "./redux/store.js";

import BookProvider from "./context/BookProvider.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <BookProvider>
          <App />
        </BookProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
