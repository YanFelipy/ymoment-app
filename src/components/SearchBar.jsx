import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'
import { useState } from 'react'


const SearchBar = () => {
  
const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSearch = () => {

      if(query) {
        return navigate(`/search?q=${query}`)
      }

    }

  return (
<div className={styles.field_search}>
    <input placeholder='Procure por hashtags...' type='text' name='query' value={query}  onChange={(e) => setQuery(e.target.value)}/>
    <div className={styles.svg_search}>
      <button onClick={handleSearch}>
    <svg width="30px" height="30px"
    viewBox="-8.32 -8.32 48.64 48.64" version="1.1"
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" 
    strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0" 
    transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier"
     strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M28.591 27.273l-7.263-7.264c1.46-1.756 2.339-4.010 2.339-6.471 0-5.595-4.535-10.129-10.129-10.129-5.594 0-10.129 4.535-10.129 10.129 0 5.594 4.536 10.129 10.129 10.129 2.462 0 4.716-0.879 6.471-2.339l7.263 7.264 1.319-1.319zM4.475 13.538c0-4.997 4.065-9.063 9.063-9.063 4.997 0 9.063 4.066 9.063 9.063s-4.066 9.063-9.063 9.063c-4.998 0-9.063-4.066-9.063-9.063z" fill="#000000"> </path> </g></svg>
      </button>
    </div>
  </div>
  )
}

export default SearchBar