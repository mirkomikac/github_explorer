import React, { useEffect, useState } from "react";
import "./Search.css";

export interface SearchProps {
  label: string;
  placeholder?: string;
  items: SearchItem[];
  onItemSelected: (item: SearchItem) => void;
}

export interface SearchItem {
  id: string;
  text: string;
}

const Search: React.FC<SearchProps> = ({
  label = "",
  items = [],
  placeholder,
  onItemSelected,
}) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderSearchResults = () => {
    if (!debouncedTerm || !debouncedTerm.length) {
      return;
    }

    const results = items.filter((i: SearchItem) =>
      i.text.toLowerCase().includes(debouncedTerm.toLowerCase())
    );

    const liItemRender = (item: SearchItem) => (
      <span
        className="search__result"
        key={item.id}
        onClick={() => onItemSelected(item)}
      >
        {item.text}
      </span>
    );

    return results.map(liItemRender);
  };

  const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search">
      <h1 className="search__label">{label}</h1>
      <input
        className="search__input"
        placeholder={placeholder}
        type="text"
        onChange={onInputChanged}
      />
      <div className="search__results">{renderSearchResults()}</div>
    </div>
  );
};

export default Search;
