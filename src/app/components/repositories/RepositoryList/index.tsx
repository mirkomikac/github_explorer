import React from "react";
import { Repository } from "../../../shared/apis/github/types";
import RepositoryItem from "../RepositoryItem";

export interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories = [],
}) => {
  const renderRepositories = () => {
    if (!repositories || !repositories.length) {
      return renderEmptyState();
    }

    return repositories.map((r: Repository) => (
      <div key={r.id}>
        <RepositoryItem repository={r} />
      </div>
    ));
  };

  const renderEmptyState = () => {
    return <h1>No repositories to display!</h1>;
  };

  return <div>{renderRepositories()}</div>;
};

export default RepositoryList;
