import { SearchRepositoriesActionType, StarRepositoryActionType } from "../action-types";
import { Repository, SearchRepositoriesResponse } from "../../shared/apis/github/types";

export interface SearchRepositoriesAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: SearchRepositoriesResponse;
}

export interface SearchRepositoriesErrorAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type SearchRepositoryAction =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

export interface StarredRepositores {
  [id: string]: Repository;
}

export interface StarRepositoryAction {
  type: StarRepositoryActionType.REPOSITORY_STARRED;
  payload: StarredRepositores;
}

export interface UnstarRepositoryAction {
  type: StarRepositoryActionType.REPOSITORY_UNSTARRED;
  payload: StarredRepositores;
}

export type StarredRepositoryAction = StarRepositoryAction | UnstarRepositoryAction;
