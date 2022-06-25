import { SearchRepositoriesActionType } from "../action-types";
import { SearchRepositoryAction } from "../actions";
import { SearchRepositoriesResponse } from "../../shared/apis/github/types";

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: SearchRepositoriesResponse;
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: { total_count: 0, incomplete_results: true, items: [] },
};

const reducer = (
  state: RepositoriesState = initialState,
  action?: SearchRepositoryAction
): RepositoriesState => {
  if(!action){
    return state;
  }

  switch (action.type) {
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: { total_count: 0, incomplete_results: true, items: [] },
      };
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: { total_count: 0, incomplete_results: true, items: [] },
      };
    default:
      return state;
  }
};

export default reducer;
