import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../state";
import { Repository } from "../../../shared/apis/github/types";
import RepositoryList from ".";

test("renders properly the repository list", () => {
  const repositories: Repository[] = [...mockRepositoryList];

  render(
    <Provider store={store}>
      <RepositoryList repositories={repositories} />
    </Provider>
  );

  const expectedElementCount = repositories.length;
  const elementCount = screen.getAllByText(/Repository Test/i).length;
  expect(elementCount).toBe(expectedElementCount);
});

test("renders empty state", () => {
  const repositories: Repository[] = [];

  render(
    <Provider store={store}>
      <RepositoryList repositories={repositories} />
    </Provider>
  );

  const noItemsToDisplay = screen.getByText("No repositories to display!");
  expect(noItemsToDisplay).toBeInTheDocument();
});

const mockRepositoryList: Repository[] = [
  {
    id: 106040968,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDYwNDA5Njg=",
    name: "gluon-api",
    full_name: "Repository Test",
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
      following_url:
        "https://api.github.com/users/gluon-api/following{/other_user}",
      gists_url: "https://api.github.com/users/gluon-api/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gluon-api/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/gluon-api/subscriptions",
      organizations_url: "https://api.github.com/users/gluon-api/orgs",
      repos_url: "https://api.github.com/users/gluon-api/repos",
      events_url: "https://api.github.com/users/gluon-api/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gluon-api/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/gluon-api/gluon-api",
    description:
      "A clear, concise, simple yet powerful and efficient API for deep learning.",
    fork: false,
    url: "https://api.github.com/repos/gluon-api/gluon-api",
    forks_url: "https://api.github.com/repos/gluon-api/gluon-api/forks",
    keys_url: "https://api.github.com/repos/gluon-api/gluon-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/gluon-api/gluon-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/gluon-api/gluon-api/teams",
    hooks_url: "https://api.github.com/repos/gluon-api/gluon-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/gluon-api/gluon-api/issues/events{/number}",
    events_url: "https://api.github.com/repos/gluon-api/gluon-api/events",
    assignees_url:
      "https://api.github.com/repos/gluon-api/gluon-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/gluon-api/gluon-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/gluon-api/gluon-api/tags",
    blobs_url:
      "https://api.github.com/repos/gluon-api/gluon-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/gluon-api/gluon-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/gluon-api/gluon-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/gluon-api/gluon-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/gluon-api/gluon-api/statuses/{sha}",
    languages_url: "https://api.github.com/repos/gluon-api/gluon-api/languages",
    stargazers_url:
      "https://api.github.com/repos/gluon-api/gluon-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/gluon-api/gluon-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/gluon-api/gluon-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/gluon-api/gluon-api/subscription",
    commits_url:
      "https://api.github.com/repos/gluon-api/gluon-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/gluon-api/gluon-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/gluon-api/gluon-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/gluon-api/gluon-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/gluon-api/gluon-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/gluon-api/gluon-api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/gluon-api/gluon-api/merges",
    archive_url:
      "https://api.github.com/repos/gluon-api/gluon-api/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/gluon-api/gluon-api/downloads",
    issues_url:
      "https://api.github.com/repos/gluon-api/gluon-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/gluon-api/gluon-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/gluon-api/gluon-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/gluon-api/gluon-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/gluon-api/gluon-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/gluon-api/gluon-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/gluon-api/gluon-api/deployments",
    created_at: new Date("2017-10-06T19:08:15Z"),
    updated_at: new Date("2022-06-23T07:56:25Z"),
    pushed_at: new Date("2019-08-13T08:41:21Z"),
    git_url: "git://github.com/gluon-api/gluon-api.git",
    ssh_url: "git@github.com:gluon-api/gluon-api.git",
    clone_url: "https://github.com/gluon-api/gluon-api.git",
    svn_url: "https://github.com/gluon-api/gluon-api",
    homepage: "",
    size: 80,
    stargazers_count: 2322,
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
  },
  {
    id: 80140505,
    node_id: "MDEwOlJlcG9zaXRvcnk4MDE0MDUwNQ==",
    name: "preload-webpack-plugin",
    full_name: "Repository Test",
    private: false,
    owner: {
      login: "GoogleChromeLabs",
      id: 31970254,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMxOTcwMjU0",
      avatar_url: "https://avatars.githubusercontent.com/u/31970254?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/GoogleChromeLabs",
      html_url: "https://github.com/GoogleChromeLabs",
      followers_url: "https://api.github.com/users/GoogleChromeLabs/followers",
      following_url:
        "https://api.github.com/users/GoogleChromeLabs/following{/other_user}",
      gists_url:
        "https://api.github.com/users/GoogleChromeLabs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/GoogleChromeLabs/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/GoogleChromeLabs/subscriptions",
      organizations_url: "https://api.github.com/users/GoogleChromeLabs/orgs",
      repos_url: "https://api.github.com/users/GoogleChromeLabs/repos",
      events_url:
        "https://api.github.com/users/GoogleChromeLabs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/GoogleChromeLabs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/GoogleChromeLabs/preload-webpack-plugin",
    description:
      "Please use https://github.com/vuejs/preload-webpack-plugin instead.",
    fork: false,
    url: "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin",
    forks_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/forks",
    keys_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/teams",
    hooks_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/hooks",
    issue_events_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/events",
    assignees_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/tags",
    blobs_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/languages",
    stargazers_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/stargazers",
    contributors_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/contributors",
    subscribers_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/subscribers",
    subscription_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/subscription",
    commits_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/merges",
    archive_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/downloads",
    issues_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/labels{/name}",
    releases_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/GoogleChromeLabs/preload-webpack-plugin/deployments",
    created_at: new Date("2017-01-26T18:06:06Z"),
    updated_at: new Date("2022-06-25T13:53:35Z"),
    pushed_at: new Date("2021-01-20T19:08:40Z"),
    git_url: "git://github.com/GoogleChromeLabs/preload-webpack-plugin.git",
    ssh_url: "git@github.com:GoogleChromeLabs/preload-webpack-plugin.git",
    clone_url: "https://github.com/GoogleChromeLabs/preload-webpack-plugin.git",
    svn_url: "https://github.com/GoogleChromeLabs/preload-webpack-plugin",
    homepage: "",
    size: 1242,
    stargazers_count: 2173,
    watchers_count: 2173,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 174,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 59,
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
      "performance",
      "prefetch",
      "preload",
      "preload-plugin",
      "web",
      "webpack-plugin",
    ],
    visibility: "public",
    forks: 174,
    open_issues: 59,
    watchers: 2173,
    default_branch: "master",
    score: 1.0,
  },
  {
    id: 125793411,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjU3OTM0MTE=",
    name: "react-native-motion",
    full_name: "Repository Test",
    private: false,
    owner: {
      login: "xotahal",
      id: 3531955,
      node_id: "MDQ6VXNlcjM1MzE5NTU=",
      avatar_url: "https://avatars.githubusercontent.com/u/3531955?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/xotahal",
      html_url: "https://github.com/xotahal",
      followers_url: "https://api.github.com/users/xotahal/followers",
      following_url:
        "https://api.github.com/users/xotahal/following{/other_user}",
      gists_url: "https://api.github.com/users/xotahal/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/xotahal/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/xotahal/subscriptions",
      organizations_url: "https://api.github.com/users/xotahal/orgs",
      repos_url: "https://api.github.com/users/xotahal/repos",
      events_url: "https://api.github.com/users/xotahal/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/xotahal/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/xotahal/react-native-motion",
    description: "Animate it! Easily!",
    fork: false,
    url: "https://api.github.com/repos/xotahal/react-native-motion",
    forks_url: "https://api.github.com/repos/xotahal/react-native-motion/forks",
    keys_url:
      "https://api.github.com/repos/xotahal/react-native-motion/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/xotahal/react-native-motion/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/xotahal/react-native-motion/teams",
    hooks_url: "https://api.github.com/repos/xotahal/react-native-motion/hooks",
    issue_events_url:
      "https://api.github.com/repos/xotahal/react-native-motion/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/xotahal/react-native-motion/events",
    assignees_url:
      "https://api.github.com/repos/xotahal/react-native-motion/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/xotahal/react-native-motion/branches{/branch}",
    tags_url: "https://api.github.com/repos/xotahal/react-native-motion/tags",
    blobs_url:
      "https://api.github.com/repos/xotahal/react-native-motion/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/xotahal/react-native-motion/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/xotahal/react-native-motion/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/xotahal/react-native-motion/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/xotahal/react-native-motion/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/xotahal/react-native-motion/languages",
    stargazers_url:
      "https://api.github.com/repos/xotahal/react-native-motion/stargazers",
    contributors_url:
      "https://api.github.com/repos/xotahal/react-native-motion/contributors",
    subscribers_url:
      "https://api.github.com/repos/xotahal/react-native-motion/subscribers",
    subscription_url:
      "https://api.github.com/repos/xotahal/react-native-motion/subscription",
    commits_url:
      "https://api.github.com/repos/xotahal/react-native-motion/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/xotahal/react-native-motion/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/xotahal/react-native-motion/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/xotahal/react-native-motion/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/xotahal/react-native-motion/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/xotahal/react-native-motion/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/xotahal/react-native-motion/merges",
    archive_url:
      "https://api.github.com/repos/xotahal/react-native-motion/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/xotahal/react-native-motion/downloads",
    issues_url:
      "https://api.github.com/repos/xotahal/react-native-motion/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/xotahal/react-native-motion/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/xotahal/react-native-motion/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/xotahal/react-native-motion/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/xotahal/react-native-motion/labels{/name}",
    releases_url:
      "https://api.github.com/repos/xotahal/react-native-motion/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/xotahal/react-native-motion/deployments",
    created_at: new Date("2018-03-19T02:57:21Z"),
    updated_at: new Date("2022-06-18T16:00:27Z"),
    pushed_at: new Date("2020-07-24T14:32:31Z"),
    git_url: "git://github.com/xotahal/react-native-motion.git",
    ssh_url: "git@github.com:xotahal/react-native-motion.git",
    clone_url: "https://github.com/xotahal/react-native-motion.git",
    svn_url: "https://github.com/xotahal/react-native-motion",
    homepage: "",
    size: 46,
    stargazers_count: 2022,
    watchers_count: 2022,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 134,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 15,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: ["animation", "react-native", "ux"],
    visibility: "public",
    forks: 134,
    open_issues: 15,
    watchers: 2022,
    default_branch: "master",
    score: 1.0,
  },
  {
    id: 91576794,
    node_id: "MDEwOlJlcG9zaXRvcnk5MTU3Njc5NA==",
    name: "whats-new-in-swift-4",
    full_name: "Repository Test",
    private: false,
    owner: {
      login: "ole",
      id: 5010,
      node_id: "MDQ6VXNlcjUwMTA=",
      avatar_url: "https://avatars.githubusercontent.com/u/5010?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ole",
      html_url: "https://github.com/ole",
      followers_url: "https://api.github.com/users/ole/followers",
      following_url: "https://api.github.com/users/ole/following{/other_user}",
      gists_url: "https://api.github.com/users/ole/gists{/gist_id}",
      starred_url: "https://api.github.com/users/ole/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ole/subscriptions",
      organizations_url: "https://api.github.com/users/ole/orgs",
      repos_url: "https://api.github.com/users/ole/repos",
      events_url: "https://api.github.com/users/ole/events{/privacy}",
      received_events_url: "https://api.github.com/users/ole/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ole/whats-new-in-swift-4",
    description:
      "An Xcode playground showcasing the new features in Swift 4.0.",
    fork: false,
    url: "https://api.github.com/repos/ole/whats-new-in-swift-4",
    forks_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/forks",
    keys_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/teams",
    hooks_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/hooks",
    issue_events_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/issues/events{/number}",
    events_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/events",
    assignees_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/branches{/branch}",
    tags_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/tags",
    blobs_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/languages",
    stargazers_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/stargazers",
    contributors_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/contributors",
    subscribers_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/subscribers",
    subscription_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/subscription",
    commits_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ole/whats-new-in-swift-4/merges",
    archive_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/downloads",
    issues_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ole/whats-new-in-swift-4/deployments",
    created_at: new Date("2017-05-17T12:59:10Z"),
    updated_at: new Date("2022-06-23T16:13:21Z"),
    pushed_at: new Date("2018-06-08T08:16:11Z"),
    git_url: "git://github.com/ole/whats-new-in-swift-4.git",
    ssh_url: "git@github.com:ole/whats-new-in-swift-4.git",
    clone_url: "https://github.com/ole/whats-new-in-swift-4.git",
    svn_url: "https://github.com/ole/whats-new-in-swift-4",
    homepage: "https://oleb.net/blog/2017/05/whats-new-in-swift-4-playground/",
    size: 822,
    stargazers_count: 1856,
    watchers_count: 1856,
    language: "Swift",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 140,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: undefined,
    allow_forking: true,
    is_template: false,
    topics: ["playground", "swift", "xcode"],
    visibility: "public",
    forks: 140,
    open_issues: 0,
    watchers: 1856,
    default_branch: "master",
    score: 1.0,
  },
  {
    id: 117678005,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTc2NzgwMDU=",
    name: "graphcool-framework",
    full_name: "Repository Test",
    private: false,
    owner: {
      login: "Graphcool",
      id: 39378637,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjM5Mzc4NjM3",
      avatar_url: "https://avatars.githubusercontent.com/u/39378637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Graphcool",
      html_url: "https://github.com/Graphcool",
      followers_url: "https://api.github.com/users/Graphcool/followers",
      following_url:
        "https://api.github.com/users/Graphcool/following{/other_user}",
      gists_url: "https://api.github.com/users/Graphcool/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Graphcool/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Graphcool/subscriptions",
      organizations_url: "https://api.github.com/users/Graphcool/orgs",
      repos_url: "https://api.github.com/users/Graphcool/repos",
      events_url: "https://api.github.com/users/Graphcool/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Graphcool/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/Graphcool/graphcool-framework",
    description: undefined,
    fork: false,
    url: "https://api.github.com/repos/Graphcool/graphcool-framework",
    forks_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/forks",
    keys_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/teams",
    hooks_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/hooks",
    issue_events_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/events",
    assignees_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/branches{/branch}",
    tags_url: "https://api.github.com/repos/Graphcool/graphcool-framework/tags",
    blobs_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/languages",
    stargazers_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/stargazers",
    contributors_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/contributors",
    subscribers_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/subscribers",
    subscription_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/subscription",
    commits_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/merges",
    archive_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/downloads",
    issues_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Graphcool/graphcool-framework/deployments",
    created_at: new Date("2018-01-16T11:58:16Z"),
    updated_at: new Date("2022-06-18T15:11:25Z"),
    pushed_at: new Date("2020-09-04T16:57:58Z"),
    git_url: "git://github.com/Graphcool/graphcool-framework.git",
    ssh_url: "git@github.com:Graphcool/graphcool-framework.git",
    clone_url: "https://github.com/Graphcool/graphcool-framework.git",
    svn_url: "https://github.com/Graphcool/graphcool-framework",
    homepage: undefined,
    size: 12378,
    stargazers_count: 1793,
    watchers_count: 1793,
    language: "Scala",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 131,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 534,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 131,
    open_issues: 534,
    watchers: 1793,
    default_branch: "master",
    score: 1.0,
  },
  {
    id: 106452675,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDY0NTI2NzU=",
    name: "ImagineEngine",
    full_name: "Repository test",
    private: false,
    owner: {
      login: "JohnSundell",
      id: 2466701,
      node_id: "MDQ6VXNlcjI0NjY3MDE=",
      avatar_url: "https://avatars.githubusercontent.com/u/2466701?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/JohnSundell",
      html_url: "https://github.com/JohnSundell",
      followers_url: "https://api.github.com/users/JohnSundell/followers",
      following_url:
        "https://api.github.com/users/JohnSundell/following{/other_user}",
      gists_url: "https://api.github.com/users/JohnSundell/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/JohnSundell/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/JohnSundell/subscriptions",
      organizations_url: "https://api.github.com/users/JohnSundell/orgs",
      repos_url: "https://api.github.com/users/JohnSundell/repos",
      events_url: "https://api.github.com/users/JohnSundell/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/JohnSundell/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/JohnSundell/ImagineEngine",
    description:
      "A project to create a blazingly fast Swift game engine that is a joy to use 🚀",
    fork: false,
    url: "https://api.github.com/repos/JohnSundell/ImagineEngine",
    forks_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/forks",
    keys_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/teams",
    hooks_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/hooks",
    issue_events_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/issues/events{/number}",
    events_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/events",
    assignees_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/branches{/branch}",
    tags_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/tags",
    blobs_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/languages",
    stargazers_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/stargazers",
    contributors_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/contributors",
    subscribers_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/subscribers",
    subscription_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/subscription",
    commits_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/JohnSundell/ImagineEngine/merges",
    archive_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/downloads",
    issues_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/labels{/name}",
    releases_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/JohnSundell/ImagineEngine/deployments",
    created_at: new Date("2017-10-10T18:00:33Z"),
    updated_at: new Date("2022-06-23T16:16:09Z"),
    pushed_at: new Date("2020-09-03T19:52:06Z"),
    git_url: "git://github.com/JohnSundell/ImagineEngine.git",
    ssh_url: "git@github.com:JohnSundell/ImagineEngine.git",
    clone_url: "https://github.com/JohnSundell/ImagineEngine.git",
    svn_url: "https://github.com/JohnSundell/ImagineEngine",
    homepage: "",
    size: 1405,
    stargazers_count: 1765,
    watchers_count: 1765,
    language: "Swift",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 106,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 29,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: undefined,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    topics: [
      "2d-game-engine",
      "coreanimation",
      "game-development",
      "game-engine",
      "swift",
    ],
    visibility: "public",
    forks: 106,
    open_issues: 29,
    watchers: 1765,
    default_branch: "master",
    score: 1.0,
  },
];
