const Filter = ({filterName, handleFilter}) => {
    return(
        <div>
            Filter shown with <input value={filterName} onChange={handleFilter}  />
        </div>
    )

}

export default Filter