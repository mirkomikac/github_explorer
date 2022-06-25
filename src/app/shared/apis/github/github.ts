import axios from "axios";
import { GITHUB_BASE_URL } from "../../constants";

const githubApi = axios.create({
  baseURL: GITHUB_BASE_URL,
});

export default githubApi;
