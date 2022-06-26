import React, { useState, useEffect } from "react";
import { SearchRepositoriesParams } from "../../../state/action-creators";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getDateOnlyISOStringOneWeekAgo } from "../../../shared/helpers/datetime";
import { languages } from "../../../shared/apis/github/languages";
import Search, { SearchItem } from "../../shared/Search";
import RepositoryList from "../RepositoryList";
import "../Repositories.css";

const languageSearchItems: SearchItem[] = languages.map((l) => ({
  id: l.id,
  text: l.text,
}));

const defaultTrendingQueryParams = (): SearchRepositoriesParams => {
  const dateQueryString = getDateOnlyISOStringOneWeekAgo();
  const queryParams: SearchRepositoriesParams = {
    order: "desc",
    q: `created:>${dateQueryString}`,
    sort: "stars",
  };

  return queryParams;
};

const Repositories: React.FC = () => {
  const [showStarred, setShowStarred] = useState<boolean>(false);

  const { searchRepositories } = useActions();

  const repositories = useTypedSelector((state) => state.repositories);

  const starredRepositories = useTypedSelector((state) => state.starredRepositories);

  const starredRepoItems = Object.values(starredRepositories);
  const { data, loading, error } = repositories;

  useEffect(() => {
    searchRepositories(defaultTrendingQueryParams());
  }, []);

  const onLanguageSelected = (searchItem: SearchItem) => {
    searchRepositoriesByLanguage(searchItem.text);
  };

  const searchRepositoriesByLanguage = (language: string) => {
    const languageQueryParams = defaultTrendingQueryParams();
    languageQueryParams.q = `${languageQueryParams.q}+language:${language}`;
    searchRepositories(languageQueryParams);
    setShowStarred(false);
  };

  const renderSearch = () => {
    return (
      <Search
        label={"Search trending by language"}
        items={languageSearchItems}
        placeholder="Javascript..."
        onItemSelected={onLanguageSelected}
      />
    );
  };

  const renderSelectReposTypeOption = () => {
    return (
      <div className="starred-repositories-action">
        <button
          className="starred-repositories-action__toggle"
          onClick={() => setShowStarred(!showStarred)}
        >
          {showStarred ? "Show all" : "Show starred"}
        </button>
      </div>
    );
  };

  const renderRepositories = () => {
    if (loading) {
      return (
        <div data-testid="loading-data-state">
          <h1>Loading data</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div data-testid="data-retrieving-error-state">
          <h1>An error has occured while loading data</h1>
        </div>
      );
    }

    if (showStarred) {
      return (
        <div className="starred-repositories" data-testid="starred-repositories">
          <h1>Starred repos</h1>
          <RepositoryList repositories={starredRepoItems} />
        </div>
      );
    }

    return (
      <div className="trending-repositories" data-testid="trending-repositories">
        <h1>Trending repositories</h1>
        <RepositoryList repositories={data.items} />
      </div>
    );
  };

  return (
    <section>
      <header>{renderSearch()}</header>
      {renderSelectReposTypeOption()}
      {renderRepositories()}
    </section>
  );
};

export default Repositories;
