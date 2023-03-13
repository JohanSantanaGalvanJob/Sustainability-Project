import React, { useEffect, useState } from 'react'
import CategoryItemsService from '../../Services/categoryitems.service';
import PostService from '../../Services/post.service';
import UserService from '../../Services/user.service';
import "./Newsfeed.scss"
function Newsfeed() {
  let postData;
  const [items, setItems] = useState({
    posts: "",
    userData: ""
  });
    const getEverything = () => {
        PostService.getAll().then((response) => {
            
            postData = response.data
            console.log(items);

        }).catch((e) => {
            console.log(e)
        });
         
           UserService.getAll().then((response) => {
          
             setItems({...items, posts: postData, userData: response.data})
         })
         
    }

    useEffect(() => {
      
        getEverything();
      console.log(items); 
      for (let index = 0; index < items.userData.length; index++) {
        const element = items.userData.id[index];
        console.log(element.indexOf(1));
        
      }
    }, []);
    
  return (
    <section className='newsfeed-container'>
       <h1>Newsfeed</h1>
       {items.posts ? (<>
                
                {items.posts.map((post, index) =>
                <article key={index}>
                <div>
                  <img src={post.image} alt="profile" />
                  <div>
                  <h2> just got 120 points for picking up trash</h2> 
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