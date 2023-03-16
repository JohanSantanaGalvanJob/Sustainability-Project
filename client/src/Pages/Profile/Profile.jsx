import "./Profile.scss"
import postImage from '../../images/restaurantStockphoto.jpg'
import profileImage from '../../images/pexels-photo-220453.png'
import leafProfileDetails from '../../images/leafProfileDetails.svg'
import leafProfileBio from '../../images/leafProfileBio.svg'
import UserService from "../../Services/user.service"
import PostService from "../../Services/post.service"
import { useEffect, useState } from "react"


const Profile = () => {

    let userId = sessionStorage.getItem('userId');
    const [user, setUser] = useState([]);
    const urlImage = 'http://localhost:8080/public/images/'

    const getProfile = () => {
        UserService.get(userId).then((response) => {
            setUser(response.data);
            console.log(response.data);
        }).catch((e) => {
            console.log(e)
        });
        // PostService.getAll().then((response) => {
        //     setItems({ ...items, posts: response.data, userData: userDatas })
        //     console.log(items);
        // }).catch((e) => {
        //     console.log(e)
        // });

    }

    useEffect(() => {
        getProfile();
    }, []);
    // try {
    //     for (let index = 0; index < items.posts.length; index++) {
    //         const element = items.posts[index];
    //         if (element.userId == sessionStorage.getItem('userId')) {
    //             userPosts.push(element)
    //             console.log(element);
    //         }

    //     }
    // } catch (error) {

    // }
    return (
        <>
            {!!user ?

                <section className="profile-container">
                    <div className="about-user-container">
                        <img src={urlImage + user.image} alt="profile picture" className="profilePicture" />
                        <img src={leafProfileBio} alt="Leaf containing profile-bio" className="profileBioImg" />
                        <img src={leafProfileDetails} alt="Leaf containing profile-details" className="profileDetailsImg" />
                        <p className="profileBio">Do something drastic, cut the plastic!</p>
                        <div className="user-info-container ">
                            <p className="username"> @{user.username}</p>
                            <p className="points">{user.points} points</p>
                        </div>
                    </div> 
                    <article className="profilePosts">
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />
                    <img src={postImage} alt="profile" className="post-image" />

                        {/* {userPosts ? (<>

            {userPosts.map((post, index) =>


                <img src={post.image} alt="profile" className="post-image" />

            )}
        </>) : <h2> No posts yet </h2>} */}
                    </article>
                </section>

                : null}

        </>
    )
}

export default Profile