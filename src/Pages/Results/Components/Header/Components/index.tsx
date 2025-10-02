import './SearchBox.css';
import { SearchOutlined } from '@mui/icons-material';
import { BiFilter } from 'react-icons/bi';
const SearchBox = () => {
    return <div className='search'>
        <label htmlFor="searchbox">
            <SearchOutlined className='search__icon' />
            <input type="text" placeholder='Buscar empleo' id='searchbox' />
        </label>
        <button>Buscar</button>
        <div className='filters-btn'>
            <BiFilter />
        </div>
    </div>
}
export default SearchBox;
