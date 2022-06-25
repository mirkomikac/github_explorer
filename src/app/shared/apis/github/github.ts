import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const GITHUB_STARRED_REPOS_LOCAL_STORAGE_KEY: string =
  "github-trending-starred";

export default githubApi;
