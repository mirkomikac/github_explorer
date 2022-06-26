import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="app__footer">
      <img
        src={process.env.PUBLIC_URL + "/github/GitHub_Logo_White.png"}
        alt="GitHub logo representing API integration"
      ></img>
      <p>Integrated with GitHub API</p>
    </footer>
  );
};

export default Footer;
