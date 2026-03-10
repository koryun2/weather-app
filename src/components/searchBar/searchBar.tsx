import { useContext, useRef, useState } from "react";
import {
  SearchBarContainer,
  InputContainer,
  SearchBarInput,
  SearchBarButton,
  SearchBarButtonIcon,
} from "./searchBar.styles";
import { AppContext } from "../../contextProvider";
import { getPositionFromCity } from "../../services/location";

export interface SearchBarProps {
  input: string;
}

export default function SearchBar() {
  const { setCity, setPosition, setCountry, setState, setError } =
    useContext(AppContext);
  const [query, setQuery] = useState<string>("");

  const inputContainerRef = useRef<HTMLDivElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSearch(city: string) {
    if (city === "") return;
    getPositionFromCity(city)
      .then((results) => {
        const first = results[0];
        if (!first) {
          setError("City not found.");
          return;
        }
        setCity(first.name);
        setCountry(first.country);
        setState(first.state ?? "");
        setPosition(first.lat, first.lon);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <SearchBarContainer>
      <InputContainer ref={inputContainerRef}>
        <SearchBarInput
          value={query}
          placeholder="Search city"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch(query);
            }
          }}
        />
      </InputContainer>

      <SearchBarButton onClick={() => handleSearch(query)}>
        <SearchBarButtonIcon src="/icons/search.svg" alt="search" />
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
}
