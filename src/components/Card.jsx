import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age)
  return (
    <div className='card'>
        <img src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg" />
        <h1>Samridhi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      
    </div>
  )
}

export default Card
