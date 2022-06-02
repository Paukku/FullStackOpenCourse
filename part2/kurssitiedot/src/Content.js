import Part from './Part';

const Content = ({parts}) => {

    return (
        <div>
        {parts.map(part => <Part part= {part.name} exercises= {part.exercises} key={part.id}  /> )}
          
        </div>
      )
}

export default Content