const Persons = ({persons, deleteName}) => {
    return(
        <ul>
        {persons.map(person => 
          <li key={person.name}>
            {person.name} : {person.number}
            <button type="submit" value={person.id} onClick={deleteName}>Delete</button> 
          </li>)}
      </ul>
    )
}

export default Persons