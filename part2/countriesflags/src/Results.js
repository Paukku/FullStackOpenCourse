import Languages from "./Languages"
import Weather from "./Weather"

const Results = ({foundCountry, showCountry}) => {
    return(
        <div>
            {foundCountry.length === 1 ?
             foundCountry.map((country, index) => 
                <div key={index}> 
                    <h1>{country.name.common}</h1>
                    <p>Capital {country.capital}</p>
                    <p>Area {country.area}</p>
                    <h2>Languages</h2>
                    <Languages languages={country.languages} />
                    <img src={country.flags.png} alt="country flag" />
                    <Weather capit={country.capital}/>
                </div>
             )
             :
             foundCountry.map((country, index) => 
             <div key={index}>{country.name.common} 
             <button value={country.name.common} onClick={showCountry}>show</button></div> 
             )
             }
        </div>
    )
} 



export default Results