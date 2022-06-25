import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Repositories from "./Repositories";
import { store } from "../../state";

test("renders initial empty state repository", () => {
  render(
    <Provider store={store}>
      <Repositories />
    </Provider>
  );

  const repositoryEmptyStateText = screen.getByText(
    "No repositories to display!"
  );

  expect(repositoryEmptyStateText).toBeInTheDocument();
});
