import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";
import starredRepositoriesReducer from "./starredRepositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  starredRepositories: starredRepositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
