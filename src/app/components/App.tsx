import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import "./App.css";
import Repositories from "./repositories/Repositories";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main>
        <header className="app__header">
          <h1>GitHub Trending Repositories</h1>
          <img
            src={process.env.PUBLIC_URL + "/github/GitHub-Mark-Light-64px.png"}
          />
          <p>Integrated with GitHub API</p>
        </header>

        <Repositories />

        <footer className="app__footer">
          <img
            src={process.env.PUBLIC_URL + "/github/GitHub_Logo_White.png"}
            alt="GitHub logo representing API integration"
          ></img>
          <p>Integrated with GitHub API</p>
        </footer>
      </main>
    </Provider>
  );
};

export default App;
