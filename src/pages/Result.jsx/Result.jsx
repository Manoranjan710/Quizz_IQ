import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({name, score}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/")
    }
  },[name, navigate])

  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <span className='text-black text-xl sm:text-3xl m-3'>Hey {name}! Here is your Final Score: 
      </span>
      <p className='text-black text-5xl m-5'> {score}</p>
      <Button variant='contained' color='success' size='large' href='/' className='mt-6'> Go to homepage </Button>
    </div>
  )
}

export default Result;