import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/moinuddinrepos')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })

    }, [])
  return (
    <>
    <div className='bg-amber-600 p-4 m-3 text-3xl text-center uppercase rounded-lg'>Github Details</div>
    
    <div className='bg-orange-300 p-4 m-3 rounded-lg text-center'>
    <p> login: {data.login}</p>
    <p>Followers: {data.followers} </p>
    <p>username: {data.id}</p>
    <img src={data.avatar_url} alt="git_pic" />
    </div>
        
    </>
  )
}

export default Github

// export const githubDetailsLoader = async () => {
//     const response = await fetch('https://api.github.com/users/moinuddinrepos')
//     return response.json()
// }