import React from "react";
import { Owner } from "../../shared/apis/github/types";

export interface OwnerCardProps {
  owner: Owner;
}

const OwnerCard: React.FC<OwnerCardProps> = ({ owner }) => {
  const { avatar_url, login = "unknown", type } = owner;

  return (
    <div className="card">
      <h1 className="card__name">{login}</h1>
      <div className="card__data">
        <img className="card__avatar" src={avatar_url} alt="Repo avatar" />
        {type && <p className="card__type">{type}</p>}
      </div>
    </div>
  );
};

export default OwnerCard;
