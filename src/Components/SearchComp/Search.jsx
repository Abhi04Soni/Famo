import React, {useState, useEffect} from 'react'
import './Search.css'
import axios from 'axios';

export default function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);


    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedTerm(searchTerm);
      }, 300);
  
      return () => clearTimeout(timerId);
    }, [searchTerm]);
  
    useEffect(() => {
      if (debouncedTerm) {
        const fetchResults = async () => {
          const response = await axios.get(`/api/search?query=${debouncedTerm}`);
          
          if (response.status === 200) {
            const results = response.json();
            console.log(results);

          } else {
            console.error('Error fetching search results');
            
        }
        };
        fetchResults();
      }
    }, [debouncedTerm]);

  function searchChangeHandler(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }


  return (
      <div className='searchContainer'>
          <input type="text" name="" className='search' onChange={searchChangeHandler}/>
    </div>
  )
}
