import React from 'react'
import PropTypes from 'prop-types'
//props examples
const Student = (props) => {
  return (
    <div className='student'>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.isStudent ?"Yes":"NO"}</p>
    </div>
  )
}

//propTypes
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,

}
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false
}

export default Student