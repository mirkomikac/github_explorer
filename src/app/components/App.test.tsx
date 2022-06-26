import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders initial screen", () => {
  render(<App />);

  const header = screen.getByText("GitHub Trending Repositories");
  const integratedWithGitHubSubtextsHeaderFooter = screen.getAllByText(
    "Integrated with GitHub API",
  );

  expect(header).toBeInTheDocument();
  expect(integratedWithGitHubSubtextsHeaderFooter).toHaveLength(2);
});
