

const Notification = ({ message }) => {
    const noteStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    if (message === null) {
      return null
    }
  
    return (
        message.includes('Added') ?
        <div style={noteStyle}>
            {message}
        </div>
        :
        <div style={errorStyle}>
            {message}
        </div>
    )
}



export default Notification