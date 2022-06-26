import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../state";
import RepositoryItem from ".";
import { Repository } from "../../../shared/apis/github/types";

test("renders properly the repository item", () => {
  const repository: Repository = { ...mockRepository };

  render(
    <Provider store={store}>
      <RepositoryItem repository={repository} />
    </Provider>,
  );

  const properName = screen.getByText("api-gluon-testing");
  const properFullName = screen.getByText("gluon-api/gluon-api");
  const properUrl = screen.getByText("https://api.github.com/repos/gluon-api/gluon-api");
  const properDescription = screen.getByText(
    "A clear, concise, simple yet powerful and efficient API for deep learning.",
  );
  const properStarsCount = screen.getByText(/2322111/i);
  const properPublicPrivateText = screen.getByText("Public repo");

  expect(properName).toBeInTheDocument();
  expect(properFullName).toBeInTheDocument();
  expect(properUrl).toBeInTheDocument();
  expect(properDescription).toBeInTheDocument();
  expect(properStarsCount).toBeInTheDocument();
  expect(properPublicPrivateText).toBeInTheDocument();
});

const mockRepository: Repository = {
  id: 106040968,
  node_id: "MDEwOlJlcG9zaXRvcnkxMDYwNDA5Njg=",
  name: "api-gluon-testing",
  full_name: "gluon-api/gluon-api",
  private: false,
  owner: {
    login: "gluon-api",
    id: 32580227,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjMyNTgwMjI3",
    avatar_url: "https://avatars.githubusercontent.com/u/32580227?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gluon-api",
    html_url: "https://github.com/gluon-api",
    followers_url: "https://api.github.com/users/gluon-api/followers",
    following_url: "https://api.github.com/users/gluon-api/following{/other_user}",
    gists_url: "https://api.github.com/users/gluon-api/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gluon-api/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gluon-api/subscriptions",
    organizations_url: "https://api.github.com/users/gluon-api/orgs",
    repos_url: "https://api.github.com/users/gluon-api/repos",
    events_url: "https://api.github.com/users/gluon-api/events{/privacy}",
    received_events_url: "https://api.github.com/users/gluon-api/received_events",
    type: "Organization",
    site_admin: false,
  },
  html_url: "https://github.com/gluon-api/gluon-api",
  description: "A clear, concise, simple yet powerful and efficient API for deep learning.",
  fork: false,
  url: "https://api.github.com/repos/gluon-api/gluon-api",
  forks_url: "https://api.github.com/repos/gluon-api/gluon-api/forks",
  keys_url: "https://api.github.com/repos/gluon-api/gluon-api/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/gluon-api/gluon-api/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/gluon-api/gluon-api/teams",
  hooks_url: "https://api.github.com/repos/gluon-api/gluon-api/hooks",
  issue_events_url: "https://api.github.com/repos/gluon-api/gluon-api/issues/events{/number}",
  events_url: "https://api.github.com/repos/gluon-api/gluon-api/events",
  assignees_url: "https://api.github.com/repos/gluon-api/gluon-api/assignees{/user}",
  branches_url: "https://api.github.com/repos/gluon-api/gluon-api/branches{/branch}",
  tags_url: "https://api.github.com/repos/gluon-api/gluon-api/tags",
  blobs_url: "https://api.github.com/repos/gluon-api/gluon-api/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/gluon-api/gluon-api/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/gluon-api/gluon-api/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/gluon-api/gluon-api/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/gluon-api/gluon-api/statuses/{sha}",
  languages_url: "https://api.github.com/repos/gluon-api/gluon-api/languages",
  stargazers_url: "https://api.github.com/repos/gluon-api/gluon-api/stargazers",
  contributors_url: "https://api.github.com/repos/gluon-api/gluon-api/contributors",
  subscribers_url: "https://api.github.com/repos/gluon-api/gluon-api/subscribers",
  subscription_url: "https://api.github.com/repos/gluon-api/gluon-api/subscription",
  commits_url: "https://api.github.com/repos/gluon-api/gluon-api/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/gluon-api/gluon-api/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/gluon-api/gluon-api/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/gluon-api/gluon-api/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/gluon-api/gluon-api/contents/{+path}",
  compare_url: "https://api.github.com/repos/gluon-api/gluon-api/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/gluon-api/gluon-api/merges",
  archive_url: "https://api.github.com/repos/gluon-api/gluon-api/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/gluon-api/gluon-api/downloads",
  issues_url: "https://api.github.com/repos/gluon-api/gluon-api/issues{/number}",
  pulls_url: "https://api.github.com/repos/gluon-api/gluon-api/pulls{/number}",
  milestones_url: "https://api.github.com/repos/gluon-api/gluon-api/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/gluon-api/gluon-api/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/gluon-api/gluon-api/labels{/name}",
  releases_url: "https://api.github.com/repos/gluon-api/gluon-api/releases{/id}",
  deployments_url: "https://api.github.com/repos/gluon-api/gluon-api/deployments",
  created_at: new Date("2017-10-06T19:08:15Z"),
  updated_at: new Date("2022-06-23T07:56:25Z"),
  pushed_at: new Date("2019-08-13T08:41:21Z"),
  git_url: "git://github.com/gluon-api/gluon-api.git",
  ssh_url: "git@github.com:gluon-api/gluon-api.git",
  clone_url: "https://github.com/gluon-api/gluon-api.git",
  svn_url: "https://github.com/gluon-api/gluon-api",
  homepage: "",
  size: 80,
  stargazers_count: 2322111,
  watchers_count: 2322,
  language: "Jupyter Notebook",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 228,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 2,
  license: {
    key: "apache-2.0",
    name: "Apache License 2.0",
    spdx_id: "Apache-2.0",
    url: "https://api.github.com/licenses/apache-2.0",
    node_id: "MDc6TGljZW5zZTI=",
  },
  allow_forking: true,
  is_template: false,
  topics: [
    "deep-learning",
    "deep-learning-framework",
    "deep-learning-tutorial",
    "gluon",
    "imperative-programming",
    "neural-network",
    "neural-networks",
  ],
  visibility: "public",
  forks: 228,
  open_issues: 2,
  watchers: 2322,
  default_branch: "master",
  score: 1.0,
};
