import { GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY } from "../../shared/apis/github/github";
import { Repository } from "../../shared/apis/github/types";
import { StarRepositoryActionType } from "../action-types";
import { StarredRepositoryAction } from "../actions";

interface StarredRepositoriesState {
  [key: string]: Repository;
}

const tryRetreiveFromLocalStorage = (): StarredRepositoriesState => {
  let starredRepos;
  starredRepos = localStorage.getItem(GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY);

  if (!starredRepos) {
    starredRepos = "{}";
  }

  try {
    starredRepos = JSON.parse(starredRepos);
  } catch (e) {
    starredRepos = {};
  }

  return starredRepos;
};

const initialState: StarredRepositoriesState = tryRetreiveFromLocalStorage();

const reducer = (
  state: StarredRepositoriesState = initialState,
  action: StarredRepositoryAction
): StarredRepositoriesState => {
  switch (action.type) {
    case StarRepositoryActionType.REPOSITORY_STARRED:
      return { ...action.payload };
    case StarRepositoryActionType.REPOSITORY_UNSTARRED:
      return { ...action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
