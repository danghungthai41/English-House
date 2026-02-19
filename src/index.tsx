import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { StoreProvider } from "@/store";
import "./index.css";
import "./global.css";

import ErrorBoundary from "@/ErrorBoundaries/ErrorBoundaries";
import { Provider } from "react-redux";
import store from ""
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <Provider>

    <Suspense fallback={<div>loading...</div>}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Suspense>
    </Provider>
  </ErrorBoundary>
  
);

