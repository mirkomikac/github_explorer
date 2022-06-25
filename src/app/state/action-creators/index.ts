import { Dispatch } from "redux";
import qs from "qs";

import githubApi from "../../shared/apis/github/github";
import { GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY } from "../../shared/constants";
import {
  SearchRepositoriesActionType,
  StarRepositoryActionType,
} from "../action-types";
import { SearchRepositoryAction, StarredRepositoryAction } from "../actions";
import { Repository } from "../../shared/apis/github/types";

export interface SearchRepositoriesParams {
  q: string;
  order?: "asc" | "desc" | string;
  sort?: string;
}

export const searchRepositories = (
  searchRepositoriesParams: SearchRepositoriesParams
) => {
  return async (dispatch: Dispatch<SearchRepositoryAction>) => {
    dispatch({
      type: SearchRepositoriesActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await githubApi.get("/search/repositories", {
        params: searchRepositoriesParams,
        paramsSerializer: (params) => qs.stringify(params, { encode: false }),
      });

      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};

export const starRepository = (repository: Repository) => {
  return async (dispatch: Dispatch<StarredRepositoryAction>) => {
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

    starredRepos[repository.id] = repository;

    localStorage.setItem(
      GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY,
      JSON.stringify(starredRepos)
    );
    dispatch({
      type: StarRepositoryActionType.REPOSITORY_STARRED,
      payload: starredRepos,
    });
  };
};

export const unstarRepository = (repository: Repository) => {
  return async (dispatch: Dispatch<StarredRepositoryAction>) => {
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

    delete starredRepos[repository.id];
    localStorage.setItem(GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY, starredRepos);

    dispatch({
      type: StarRepositoryActionType.REPOSITORY_STARRED,
      payload: starredRepos,
    });
  };
};
