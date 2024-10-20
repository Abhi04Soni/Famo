import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/Context'
import demoPost from '../../Assets/demoPost.jpg'
import Posts from '../../Components/Posts/Posts'
import axios from 'axios'
import './Profile.css'

export default function Profile () {
  const { user } = useContext(UserContext)

  // const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('calling fetchUserPosts')
    const fetchUserPosts = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3000/dashboard/profile',
          {
            email: user
          }
        )

        if (response.data) {
          console.log(response.data)
          setPosts(response.data.userPosts)
        }
      } catch (error) {
        console.error('Error fetching user posts:', error)
      }
    }

    fetchUserPosts()
  }, [user])

  return (
    <div className='Profile-container'>
      <div className='profile-Dis'>
        <div className='profile-Dis-header'>
          <div className='Profile-Name'>{user}</div>
          <div className='profileSecondaryHeader'>
            <img src={demoPost} alt='Profile Piccher' />
           
          </div>
          <div className='profileBasic'>
              <div className='prpfileName'>Profile Name Demo</div>
              <div className='profileBio'>Here is the demo Bio Of the user</div>
            </div>
        </div>
        <div className="profileButtons">
          <button>Edit Profile</button>
          <button>Share Profile</button>
        </div>
      </div>
      <div className='profile-posts'>
        {/* {posts.map(post => (
          <Posts />
        ))} */}
      </div>
    </div>
  )
}
