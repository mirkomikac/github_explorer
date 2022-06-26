import React from "react";

const Header: React.FC = () => {
  return (
    <header className="app__header">
      <h1>GitHub Trending Repositories</h1>
      <img
        src={process.env.PUBLIC_URL + "/github/GitHub-Mark-Light-64px.png"}
        alt="GitHub logo representing API integration"
      />
      <p>Integrated with GitHub API</p>
    </header>
  );
};

export default Header;
