import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = () => {

    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 8,
              id: 2
            }
          ]
        }
      ]

    return (
        <div>
        {courses.map(course =>
            <div> 
                <Header course={course.name} key={course.id} />
                <Content parts = {course.parts} key={course.parts.id}/>
                <Total total={course.parts} key={course.parts.id} />                
            </div>
        )}
        </div>
      )
}

export default Course