const Find = ({findCountry, handleFindCountry}) => {
    return(
        <div>
            Find countries: <input value={findCountry} onChange={handleFindCountry} />
        </div>
    )
}

export default Find