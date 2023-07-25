import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState({})
  const [map, setMap] = useState("")

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    console.log(searchQuery)
  }

  async function getLocation(event) {
    try {
    event.preventDefault();
    event.target.input.value="";
    const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`
    console.log(API);
    const res = await axios.get(API);
    setLocation(res.data[0]);
    handleMap(res.data[0])
    } catch (error){
      console.log(error);
      alert("Error: Cannot find City. (Please check it is typed correctly)")
    }
  }

  function handleMap(data) {
    console.log(data)
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${data.lat},${data.lon}&zoom=11g`;
    setMap(API);
  }
  return (
    <div className="App">
      <form onSubmit={getLocation}>
       <input type="text" placeholder="Search for a city..." name="input" onChange={handleSearch}/> 
       <button type="submit">Explore!</button>
      </form>
      <p><span className='bold'>City:</span> {location.display_name}</p>
      <p><span className='bold'>Lattitude:</span> {location.lat}</p>
      <p><span className='bold'>Longitude:</span> {location.lon}</p>
      {map && <img src={map} alt="map" />}
    </div>
  );
}

export default App;
