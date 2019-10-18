import React from 'react';
import classes from './ProfileInfo.module.css';




const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://66.media.tumblr.com/e023035b889db395ae8514827be26a29/tumblr_nz9e2qjcO11r9z7bqo7_500.png' alt='' />
      </div>
      <div className={classes.descriptionBlock}>
        ava+description
      </div>
    </div>
  )


}

export default ProfileInfo;