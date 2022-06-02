const Languages = ({languages}) => {
    
    const result = Object.values(languages)
    return( 
        <ul>
            {result.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
    )
}

export default Languages