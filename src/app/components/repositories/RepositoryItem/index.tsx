import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Repository } from "../../../shared/apis/github/types";
import OwnerCard from "../OwnerCard";
import "../Repositories.css";

export interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {
  const { id, name, full_name, owner, url, topics, license, description } =
    repository;

  const starredRepositories = useTypedSelector(
    (state) => state.starredRepositories
  );

  const { starRepository, unstarRepository } = useActions();
  const starred = starredRepositories[id];

  const onStarClicked = () => {
    starRepository(repository);
  };

  const onUnstarClicked = () => {
    unstarRepository(repository);
  };

  const hasTopics = !!(topics && topics.length);

  return (
    <div>
      <div className="item">
        <div className="item_part owner">
          <OwnerCard owner={owner} />
        </div>
        <div className="item__part repository">
          <h1>{name}</h1>
          <span className="repository__stars-count">{`⭐ ${repository.stargazers_count}`}</span>
          <p>{full_name}</p>
          <a href={url}>{url}</a>
          <p className="repository__type">
            {repository.private ? `Private repo` : `Public repo`}
          </p>

          <p>{description}</p>

          {hasTopics && (
            <p className="repository__topics">[{topics.join(",")}]</p>
          )}

          {license && <p className="repository__licence">{license.name}</p>}
          {starred && (
            <div>
              <p className="repository__starred">Starred</p>
              <button className="repository__unstar" onClick={onUnstarClicked}>
                Unstar
              </button>
            </div>
          )}
          {!starred && (
            <button className="repository__star" onClick={onStarClicked}>
              Star
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
