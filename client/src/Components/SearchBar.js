import React, { useState } from 'react';

const SearchBar = ({ fetchData }) => {

  const [inputValue, setinputValue] = useState('');

  return <form onSubmit={e => {
    e.preventDefault();
    fetchData(inputValue);
  }}>
    <label htmlFor="trackingId" className="form-label">Enter your Tracking Id : </label>
    <div className="row g-3 align-items-center">
      <div className="col-auto">
        <input 
          type="number" 
          className="form-control" 
          id="trackingId" 
          aria-describedby="trackingId"
          value={inputValue}
          onChange={e => setinputValue(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button type="button" onClick={() => fetchData(inputValue)} className="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
}

export default SearchBar;