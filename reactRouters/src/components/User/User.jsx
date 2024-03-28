import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =  useParams()
  return (
    <div className='bg-red-400 p-4 m-3 rounded-md flex justify-center uppercase text-3xl'>
        User: {userid}
    </div>
  )
}

export default User