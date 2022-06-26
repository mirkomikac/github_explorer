import {
  render,
  screen,
  waitFor,
} from "../../../state/reducers/redux-mock-test-util";
import Repositories from ".";
import { RepositoriesState } from "../../../state/reducers/repositoriesReducer";
import { StarredRepositoriesState } from "../../../state/reducers/starredRepositoriesReducer";
import React from "react";

describe("initial state of repositories component", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => {
      f = () => {};
    });
  });

  test("renders initial empty state repository", async () => {
    const initialEmptyRepositoriesState: RepositoriesState = {
      loading: false,
      error: null,
      data: { total_count: 0, incomplete_results: true, items: [] },
    };

    const initialStarredRepositoriesState: StarredRepositoriesState = {};

    render(<Repositories />, {
      preloadedState: {
        repositories: initialEmptyRepositoriesState,
        starredRepositories: initialStarredRepositoriesState,
      },
    });

    await waitFor(
      async () => {
        const repositoryEmptyStateElement = await screen.findByText(
          "No repositories to display!"
        );

        expect(repositoryEmptyStateElement).toBeInTheDocument();
      }
    );
  });

  test("renders initial loading state repository", async () => {
    const initialLoadingRepositoriesState: RepositoriesState = {
      loading: true,
      error: null,
      data: { total_count: 0, incomplete_results: true, items: [] },
    };

    const initialStarredRepositoriesState: StarredRepositoriesState = {};

    render(<Repositories />, {
      preloadedState: {
        repositories: initialLoadingRepositoriesState,
        starredRepositories: initialStarredRepositoriesState,
      },
    });

    await waitFor(
      async () => {
        const repositoryLoadingStateElement = await screen.findByTestId(
          "loading-data-state"
        );

        expect(repositoryLoadingStateElement).toBeInTheDocument();
      }
    );
  });

  test("renders error state repository", async () => {
    const errorRepositoriesState: RepositoriesState = {
      loading: false,
      error: "Some error text here",
      data: { total_count: 0, incomplete_results: true, items: [] },
    };

    const initialStarredRepositoriesState: StarredRepositoriesState = {};

    render(<Repositories />, {
      preloadedState: {
        repositories: errorRepositoriesState,
        starredRepositories: initialStarredRepositoriesState,
      },
    });

    await waitFor(
      async () => {
        const repositoryErrorStateElement = await screen.findByTestId(
          "data-retrieving-error-state"
        );

        expect(repositoryErrorStateElement).toBeInTheDocument();
      }
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("testing real case integration trending repos retrieval", () => {
  test("retrieves repositories", async () => {
    render(<Repositories />);
    await waitFor(
      async () => {
        const repositoryTrendingElement = await screen.findByTestId(
          "trending-repositories"
        );

        expect(repositoryTrendingElement).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
