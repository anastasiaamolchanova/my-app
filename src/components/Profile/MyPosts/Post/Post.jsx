import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
 
    return (
        <div className = {classes.item}> 
        <img src ='https://postmediacanoe.files.wordpress.com/2019/07/gettyimages-910314172-e1564420108411.jpg' alt=""></img>
           {props.message};
           <div>
             <span>likes: {props.likes}</span>
          </div>
       </div>
    
    )
}

export default Post;