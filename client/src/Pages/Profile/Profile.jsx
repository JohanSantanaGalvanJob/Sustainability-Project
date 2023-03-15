import "./Profile.scss"
import postImage from '../../images/restaurantStockphoto.jpg'
import profileImage from '../../images/pexels-photo-220453.png'
import leafProfileDetails from '../../images/leafProfileDetails.svg'
import leafProfileBio from '../../images/leafProfileBio.svg'
import UserService from "../../Services/user.service"
import PostService from "../../Services/post.service"
import { useEffect, useState } from "react"


const Profile = () => {
    let userDatas
    let userPosts = []
    const [items, setItems] = useState({
        posts: "",
        userData: ""
        
      });
        const getProfile = () => {
            UserService.get(sessionStorage.getItem('userId')).then((response) => {
                
              userDatas = response.data 
                console.log(items);
    
            }).catch((e) => {
                console.log(e)
            });
            PostService.getAll().then((response) => {
                
                setItems({...items, posts: response.data, userData: userDatas})
                  console.log(items);
      
              }).catch((e) => {
                  console.log(e)
              });
             
        }
    
        useEffect(() => {
          
            getProfile();
           
    
        }, []);
try {
    for (let index = 0; index < items.posts.length; index++) {
        const element = items.posts[index];
        if (element.userId == sessionStorage.getItem('userId')) {
            userPosts.push(element)
            console.log(element);
        }
        
    }
} catch (error) {
    
}
    return (
        <section className="profile-container">
            <article>
                <img src={profileImage} alt="profile picture" className="profilePicture" />
                <div className="profileInfo">
                    <p className="profileBio">Lorem Ipsum</p>
                    <p className="profileDetails">{items.userData.points} points</p>
                    <img src={leafProfileBio} alt="Leaf containing profile-bio" className="profileBioImg" />
                    <img src={leafProfileDetails} alt="Leaf containing profile-details" className="profileDetailsImg" />
                </div>
            </article>
            <article className="profilePosts">
{userPosts ? (<>
                
                {userPosts.map((post, index) =>
                
                    
                    <img src={post.image} alt="profile" />

                 ) }
            </>) : <h2> No posts yet </h2>}
            </article>
        </section>
    )
}

export default Profile