import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useCustomSearchParams } from './useCustomSearchParams';

export const SearchFilter = () => {
  const [search, setSearch] = useCustomSearchParams();

  console.log(search);

  const handleChanage = e => {
    const value = e.target.value;
    if (value === '') setSearch('');
    else {
      setSearch({ country: value });
    }
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={handleChanage}
      value={search.country}
    />
  );
};
