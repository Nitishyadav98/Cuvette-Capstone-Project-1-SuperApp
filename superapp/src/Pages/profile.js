import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className='profileSection'>
            <div className='profileCard'>
                <div>Image</div>
                <div className='profileDetails'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Username</div>
                    <div>Categories</div>
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