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
    <div className="search__container">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 icon-search"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clip-rule="evenodd"
        />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 icon-search"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>

      <input
        id="search"
        type="text"
        placeholder="Search for a country..."
        onChange={handleChanage}
        value={search.country}
      />
    </div>
  );
};

// when we search for something, then change the region, the search should reset
// and when we selected a region, then start searching, the region should reset
