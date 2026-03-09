import {
  SearchDropdownContainer,
  SearchDropdownItem,
} from "./searchDropdown.styles";

type DropdownProps = {
  cities: string[];
  isOpen: boolean;
  onSelect: (city: string) => void;
};

export default function SearchDropdown({
  cities,
  isOpen,
  onSelect,
}: DropdownProps) {
  if (!isOpen || cities.length === 0) return null;

  return (
    <SearchDropdownContainer>
      {cities.map((city) => (
        <SearchDropdownItem key={city} onClick={() => onSelect(city)}>
          {city}
        </SearchDropdownItem>
      ))}
    </SearchDropdownContainer>
  );
}
