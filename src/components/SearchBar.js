import { useState } from "react";
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

import "./SearchBar.css";

const SearchBar = ({ placeholder, data, onGetSearch, onHandleId }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('')
  
  const handleFilter = (event) => {
    const searchTerm = event.target.value
    setWordEntered(searchTerm)

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    if (searchTerm === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }

    onGetSearch(searchTerm)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} value={wordEntered} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} /> }
        </div>
      </div>
      {filteredData.length !== 0 ? (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className="dataItem" to="/game" key={key} onClick={() => onHandleId(value.id)}>
                <img src={value.background_image} alt="game image" className='dataItem-image'/>
                <p>{value.name}</p>
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
