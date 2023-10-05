import React from 'react'
import '../Styles/Profile.css'

const Profile = () => {

    const profileDetails = JSON.parse(localStorage.getItem('profileDetails'))
    const categories = JSON.parse(localStorage.getItem('categories'))

  return (
    <div className='profilePage'>
        <div className='profileSection'>
            <div className='profileCard'>
                <div className='image'></div>
                <div className='profileDetails'>
                    <div>{profileDetails.name}</div>
                    <div>{profileDetails.email}</div>
                    <div>{profileDetails.username}</div>
                    <div>{categories.map((el=>(<span>{el}</span>)))}</div>
                </div>
            </div>
            <div className='weatherSection'>
                Weather Section
            </div>
        </div>
        <div className='newsSection'>
            Newspaper
        </div>
    </div>
  )
}

export default Profile