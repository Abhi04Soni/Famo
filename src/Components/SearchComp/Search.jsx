import React, {useState} from 'react'
import './Search.css'

export default function Search() {

  const [searchText, setSearchText] = React.useState('');

  function searchChangeHandler(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(searchText);
  }

  function searchFocusHandler(e) {
    e.preventDefault();
    
  }


  return (
      <div className='searchContainer'>
          <input type="text" name="" className='search' onChange={searchChangeHandler} onFocus={searchFocusHandler}/>
    </div>
  )
}
