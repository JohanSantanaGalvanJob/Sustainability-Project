import "./Profile.scss"
import postImage from '../../images/restaurantStockphoto.jpg'
import profileImage from '../../images/pexels-photo-220453.png'
const Profile = ( ) => {
    return (
        <section className="profile-container">
            <article>
                <img src={profileImage} alt="profile picture" />
                <div>
                    <p>Points: 200</p>
                    <p>Lorem Ipsum</p>
                </div>
            </article>
            <article>
<img src={postImage} alt="post" />
<img src={postImage} alt="post" />
<img src={postImage} alt="post" />
<img src={postImage} alt="post" />
            </article>
        </section>
    )
}
 
export default Profile