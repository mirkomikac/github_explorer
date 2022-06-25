import {
  SearchRepositoriesActionType,
  StarRepositoryActionType,
} from "../action-types";
import {
  Repository,
  SearchRepositoriesResponse,
} from "../../shared/apis/github/types";

interface SearchRepositoriesAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: SearchRepositoriesResponse;
}

interface SearchRepositoriesErrorAction {
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

interface StarRepositoryAction {
  type: StarRepositoryActionType.REPOSITORY_STARRED;
  payload: StarredRepositores;
}

interface UnstarRepositoryAction {
  type: StarRepositoryActionType.REPOSITORY_UNSTARRED;
  payload: StarredRepositores;
}

export type StarredRepositoryAction =
  | StarRepositoryAction
  | UnstarRepositoryAction;
