import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  SearchBarContainer,
  InputContainer,
  SearchBarInput,
  SearchBarButton,
  SearchBarButtonIcon,
} from "./searchBar.styles";
import { AppContext } from "@/contextProvider";
import { getPositionFromCity } from "@services/location";
import SearchDropdown from "@components/searchDropdown/searchDropdown";
import type { GeoPositionResult } from "@/types";

export interface SearchBarProps {
  input: string;
}

export default function SearchBar() {
  const { setCity, setPosition, setCountry, setState, setError } =
    useContext(AppContext);
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<GeoPositionResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      getPositionFromCity(query)
        .then((results) => setSuggestions(results))
        .catch(() => setSuggestions([]));
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setIsOpen(true);
  }

  const handleSelect = useCallback(
    (first: GeoPositionResult) => {
      setCity(first.name);
      setCountry(first.country);
      setState(first.state ?? "");
      setPosition(first.lat, first.lon);
      setError("");
      setSuggestions([]);
      setQuery(first.name);
      setIsOpen(false);
    },
    [setCity, setCountry, setState, setPosition, setError],
  );

  function handleSearch(city: string) {
    if (city === "") return;
    getPositionFromCity(city)
      .then((results) => {
        const first = results[0];
        if (!first) {
          setError("City not found.");
          return;
        }
        handleSelect(first);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <SearchBarContainer>
      <InputContainer ref={containerRef}>
        <SearchBarInput
          id="city-search"
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
        {isOpen && (
          <SearchDropdown cities={suggestions} onSelect={handleSelect} />
        )}
      </InputContainer>
      <SearchBarButton onClick={() => handleSearch(query)}>
        <SearchBarButtonIcon src="/icons/search.svg" alt="search" />
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
}
