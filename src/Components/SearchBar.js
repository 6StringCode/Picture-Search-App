import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
  //steps to Handling Text Inputs
  //1. create new piece of state
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  //2. create event handler to handle input change
  //3. grab the value of input with event.target.value
  const handleChange = (event) => {
    //4. set the value in the state
    setTerm(event.target.value);

  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        {/* 5. add state to the input value prop */}
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchBar;