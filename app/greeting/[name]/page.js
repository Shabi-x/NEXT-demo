import React from 'react'

const page = ({ params }) => {
  return (
    <div>Hello, nice to meet you! Mr {params.name}!</div>
  )
}

export default page