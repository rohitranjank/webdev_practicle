import React, { useState } from 'react'

const Like = () => {
    const [liked,setLiked]=useState(true);
  return (
    <>
    <button onClick={()=>setLiked(!liked)}>{liked ?"❤️":"🤍"}</button>
    </>
  )
}

export default Like