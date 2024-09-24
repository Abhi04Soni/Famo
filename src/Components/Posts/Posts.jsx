import React from 'react'
import image from '../../Assets/demoPost.jpg'
import './Posts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faComment,
  faShare,
  faBookmark
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Posts () {
  const [likesCount, setLikesCount] = useState(0)
  return (
    <div className='Posts'>
      <div className='Posts-image'>
        <img src={image} alt='demoPost' width='100%' height='100%'></img>
      </div>
      <div className='PostsActivities'>
        <div className='Posts-Activities-Main'>
                  <div className='Posts-Activities likes p'>
                      
            <FontAwesomeIcon className='pointer' icon={faHeart} onClick={() => setLikesCount(likesCount + 1)} />
            <div className="likesCount">{likesCount}</div>
          </div>
          <div className='Posts-Activities comments p'>
            <FontAwesomeIcon className='pointer' icon={faComment} />
          </div>
          <div className='Posts-Activities share p'>
            <FontAwesomeIcon className='pointer' icon={faShare} />
          </div>
        </div>
        <div className='Posts-Activities-Secondary'>
          <div className='Posts-Activities save p'>
            <FontAwesomeIcon className='pointer' icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  )
}
