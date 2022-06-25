import React, { useEffect, useState } from "react";
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
  const { repositories, starredRepositories } = useTypedSelector(
    (state) => state
  );

  const starredRepoItems = Object.values(starredRepositories);
  const { data } = repositories;

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

  return (
    <section>
      <header>
        <Search
          label={"Search trending by language"}
          items={languageSearchItems}
          placeholder="Javascript..."
          onItemSelected={onLanguageSelected}
        />
      </header>

      <div className="starred-repositories-action">
        <button
          className="starred-repositories-action__toggle"
          onClick={() => setShowStarred(!showStarred)}
        >
          {showStarred ? "Show all" : "Show starred"}
        </button>
      </div>

      {showStarred && (
        <div className="starred-repositories">
          <h1>Starred repos</h1>
          <RepositoryList repositories={starredRepoItems} />
        </div>
      )}

      {!showStarred && (
        <div className="trending-repositories">
          <h1>Trending repositories</h1>
          <RepositoryList repositories={data.items} />
        </div>
      )}
    </section>
  );
};

export default Repositories;
