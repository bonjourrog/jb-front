import './SearchBox.css';
import { SearchOutlined } from '@mui/icons-material';
import { BiFilter } from 'react-icons/bi';
import { useJobStore } from '../../../../../stores/jobStore';
import { memo,  useState } from 'react';

const SearchBox = memo(() => {
    const [searchInput, setSearchInput] = useState<string>('');
    const filters = useJobStore(state=>state.filters);
    const setFilters = useJobStore(state=>state.setFilters);

    // const debouncedSearchTerm = useDebounce(searchInput, 300);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleSearchSubmit = () => {
        setFilters({
            ...filters,
            search: searchInput
        });
        
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    }

    // useEffect(() => {
    //     setFilters({
    //         ...filters,
    //         search: debouncedSearchTerm
    //     });
    // }, [debouncedSearchTerm, setFilters]);


    return <div className='search'>
        <label htmlFor="searchbox">
            <SearchOutlined className='search__icon' />
            <input onChange={handleSearchChange} onKeyDown={handleEnter} type="text" placeholder='Buscar empleo' id='searchbox' />
        </label>
        <button onClick={handleSearchSubmit}>Buscar</button>
        <div className='filters-btn'>
            <BiFilter />
        </div>
    </div>
})
export default SearchBox;
