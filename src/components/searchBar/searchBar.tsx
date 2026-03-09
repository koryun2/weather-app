import { useContext, useEffect, useRef, useState } from "react";
import SearchDropdown from "../searchDropdown/searchDropdown";
import {
  SearchBarContainer,
  InputContainer,
  SearchBarInput,
  SearchBarButton,
  SearchBarButtonIcon,
} from "./searchBar.styles";
import { citiesMock } from "../../mocks";
import { CityContext } from "../../contextProvider";

export interface SearchBarProps {
  input: string;
}

export default function SearchBar() {
  const { setCity } = useContext(CityContext);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const inputContainerRef = useRef<HTMLDivElement>(null);

  const filteredCities = citiesMock.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase()),
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setIsOpen(true);
  }

  function handleSelect(city: string) {
    setQuery(city);
    setCity(city);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SearchBarContainer>
      <InputContainer ref={inputContainerRef}>
        <SearchBarInput
          value={query}
          placeholder="Search city..."
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
        />
        <SearchDropdown
          cities={filteredCities}
          isOpen={isOpen}
          onSelect={handleSelect}
        />
      </InputContainer>

      <SearchBarButton>
        <SearchBarButtonIcon src="/icons/search.svg" alt="search" />
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
}
