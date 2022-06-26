import { render, screen, waitFor } from "../../../state/reducers/redux-mock-test-util";
import Repositories from ".";

describe("testing real case integration trending repos retrieval", () => {
  test("retrieves repositories", async () => {
    render(<Repositories />);
    await waitFor(
      async () => {
        const repositoryLoadingElement = await screen.findByTestId("loading-data-state");
        expect(repositoryLoadingElement).toBeInTheDocument();
        const repositoryTrendingElement = await screen.findByTestId("trending-repositories");
        expect(repositoryTrendingElement).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
