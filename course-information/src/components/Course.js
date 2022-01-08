import React from 'react'

const Header = ({ course }) => {
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = ({ parts }) => {
  return(
    <>
      {parts.map(part => 
        <Part key={part.id} exercises={part.exercises} name={part.name} />
      )}
    </>
  )
}

const Total = ({ parts }) => {
  return(
  <>
    <p>Number of exercises {parts.map(part => part.exercises)
                                 .reduce((previous, current) => previous + current)}
    </p>
  </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course