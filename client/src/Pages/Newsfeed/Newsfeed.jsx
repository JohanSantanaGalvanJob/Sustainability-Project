import React, { useEffect, useState } from 'react'
import CategoryItemsService from '../../Services/categoryitems.service';
import PostService from '../../Services/post.service';
import "./Newsfeed.scss"
function Newsfeed() {
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
                
                {items.posts.map((post, index) =>
                <article key={index}>
                <div>
                  <img src={post.image} alt="profile" />
                  <div>
                    
                  <h2> {post.userId == sessionStorage.getItem('userId') ? "You " : post.user.username} just got 120 points for picking up trash</h2> 
                  <p>@{!post.location ? "Unknown" : post.location}</p> 
                  </div>
                  <img src="" alt="post image" />
                  <p>{!post.likes ? 0 : post.likes} Likes</p>
                </div>
            </article>
                 ) }
            </>) : <h2>No posts yet??? </h2>}

    </section>
  )
}

export default Newsfeed