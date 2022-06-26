import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import "./App.css";
import Repositories from "./repositories/Repositories";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Repositories />
        <Footer />
      </main>
    </Provider>
  );
};

export default App;
