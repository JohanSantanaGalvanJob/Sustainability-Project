import React, { useEffect, useState } from 'react'
import CategoryItemsService from '../../Services/categoryitems.service';
import PostService from '../../Services/post.service';
import "./Newsfeed.scss"
import testImage from '../../images/userImageTest.jpg'
import heartRed from '../../images/heartRed.svg'

function Newsfeed() {

  const urlImage = 'http://localhost:8080/public/images/'


  let postData;
  const [items, setItems] = useState({
    posts: "",
    userData: ""
    
  });
    const getEverything = () => {
        PostService.getAll().then((response) => {
            
          setItems({...items, posts: response.data, userData: 0})
            console.log(items);

        }).catch((e) => {
            console.log(e)
        });
         
    }

    useEffect(() => {
      
        getEverything();
       

    }, []);
    console.log(items);
  return (
    <section className='newsfeed-container'>
       <h1>Newsfeed</h1>
       {items.posts ? (<>
                
                {items.posts.map((post, index) => {
                  console.log(post)
                  return (
                <article key={index}>
                  <div className='user-container'>
                    <img src={testImage} alt="profile" />
                    <p>@username</p>
                    </div>
                  <img className='post-image' src={urlImage + post.image}  alt="post image" />
                  <div className='likes-location-container'>
                    <img src={heartRed}/>
                    <p>{!post.likes ? 0 : post.likes} Likes</p>
                    <p>📍 @{!post.location ? "Unknown" : post.location}</p> 
                  </div>
                  <div className='points-container'>
                    <h2> {post.userId == sessionStorage.getItem('userId') ? "You " : post.user.username} just got 120 points</h2> 
                  </div>
            </article>
                )}
                 ) }
            </>) : <h2>No posts yet??? </h2>}

    </section>
  )
}

export default Newsfeed