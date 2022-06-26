import { render, screen } from "@testing-library/react";
import OwnerCard from ".";
import { Owner } from "../../../shared/apis/github/types";

test("renders properly the owner card", () => {
  const owner: Owner = { ...mockOwner };

  render(<OwnerCard owner={owner} />);

  const properName = screen.getByText(owner.login);
  const properAvatarURL = screen.getByAltText(/repo.*? avatar/i);
  const properType = screen.getByText(owner.type);

  expect(properName).toBeInTheDocument();
  expect(properAvatarURL).toBeInTheDocument();
  expect(properType).toBeInTheDocument();
});

test("renders properly the owner car with some empty fields", () => {
  const owner = { ...mockOwner };
  owner.login = "";
  owner.avatar_url = "";
  owner.type = "";

  render(<OwnerCard owner={owner} />);

  const properName = screen.getByText("unknown");
  const properAvatarURL = screen.getByAltText(/repo.*? avatar/i);

  expect(properName).toBeInTheDocument();
  expect(properAvatarURL).toBeInTheDocument();
});

const mockOwner: Owner = {
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
};
