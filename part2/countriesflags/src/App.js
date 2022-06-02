import { useState, useEffect } from "react";
import axios from 'axios'
import Find from './Find'
import Results from "./Results";

const App = () => {
  const [country, setCountry] = useState([])
  const [findCountry, setFindCountry] = useState('')
  const [foundCountry, setFoundCountry] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => { 
      setCountry(response.data)
      
    } )
  }, [])

  const handleFindCountry = (event) => {
    const keyword = event.target.value
    setFindCountry(keyword)
    
    if(keyword !== '') {
      const results = country.filter((country) => {
        return country.name.common.toLowerCase().includes(keyword.toLowerCase())
      })
      setFoundCountry(results)
    }
    else {
      
      setFoundCountry([])
    }

  } 
  return (
    <div className="App">
     <Find findCountry={findCountry} handleFindCountry={handleFindCountry}/>
     {foundCountry.length > 10 ? "Too many matches, specify another filter" :
     <Results foundCountry={foundCountry} />
     }
    </div>
  )
}

export default App;
