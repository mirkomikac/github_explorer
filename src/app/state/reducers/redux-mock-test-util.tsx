// test-utils.jsx
import React, { ReactElement } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import reducers from ".";

export interface WrapperProps {
  children: ReactElement;
}

function render(
  ui: ReactElement,
  {
    preloadedState,
    store = createStore(reducers, preloadedState, applyMiddleware(thunk)),
    ...renderOptions
  }: any = {},
) {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
