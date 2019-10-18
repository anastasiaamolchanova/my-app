import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements =
    props.postsData.map(p => <Post message={p.text} likes={p.likes} />)

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className="div">
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove</button>
      </div>

      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>

  )

}

export default MyPosts;