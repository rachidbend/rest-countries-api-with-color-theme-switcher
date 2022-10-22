import { useCustomSearchParams } from './useCustomSearchParams';
import './SearchFilter.css';

export const SearchFilter = () => {
  const [search, setSearch] = useCustomSearchParams();

  const handleChanage = e => {
    const value = e.target.value;
    if (value === '') setSearch('');
    else {
      setSearch({ country: value });
    }
  };

  return (
    <input
      id="search"
      type="text"
      placeholder="Search for a country..."
      onChange={handleChanage}
      value={search.country}
    />
  );
};

// when we search for something, then change the region, the search should reset
// and when we selected a region, then start searching, the region should reset
