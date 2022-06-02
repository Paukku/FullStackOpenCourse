import Languages from "./Languages"

const Results = ({foundCountry}) => {

    console.log(foundCountry)
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
                    <img src={country.flags.png} />
                </div>
             )
             :
             foundCountry.map((country, index) => <div key={index}>{country.name.common}</div> )
             }
        </div>
    )
} 



export default Results