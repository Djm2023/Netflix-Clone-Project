import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 h-42 mr-4'>
        <img alt='movies'src={IMAGE_CDN + posterPath} className='cursor-pointer rounded w-full h-full'/>
    </div>
  )
}

export default MovieCard