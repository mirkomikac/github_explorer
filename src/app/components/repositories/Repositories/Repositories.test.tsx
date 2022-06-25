import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../state";
import Repositories from ".";

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
