import React from 'react'
import img from '../../assets/001.jpg'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      we will show the image here
      <Image src={img} alt="picture" width={500} height={500} />
    </div>
  )
}

export default page
