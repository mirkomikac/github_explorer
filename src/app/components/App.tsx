import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import "./App.css";
import Repositories from "./repositories/Repositories";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="app__header">Github Trending Repositories</h1>
        <Repositories />
      </div>
    </Provider>
  );
};

export default App;
