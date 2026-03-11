import {
  SearchDropdownContainer,
  SearchDropdownItem,
  SearchDropdownList,
} from "./searchDropdown.styles";
import type { GeoPositionResult } from "@/types";

export interface SearchDropdownProps {
  cities: GeoPositionResult[];
  onSelect: (city: GeoPositionResult) => void;
}

export default function SearchDropdown({
  cities,
  onSelect,
}: SearchDropdownProps) {
  if (cities.length === 0) return null;

  return (
    <SearchDropdownContainer>
      <SearchDropdownList>
        {cities.map((city) => (
          <SearchDropdownItem
            key={`${city.name}`}
            onClick={() => onSelect(city)}
          >
            {[city.name, city.state, city.country].filter(Boolean).join(", ")}
          </SearchDropdownItem>
        ))}
      </SearchDropdownList>
    </SearchDropdownContainer>
  );
}
