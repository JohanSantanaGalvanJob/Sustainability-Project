import "./Profile.scss"
import postImage from '../../images/restaurantStockphoto.jpg'
import profileImage from '../../images/pexels-photo-220453.png'
import leafProfileDetails from '../../images/leafProfileDetails.svg'
import leafProfileBio from '../../images/leafProfileBio.svg'


const Profile = () => {
    return (
        <section className="profile-container">
            <article>
                <img src={profileImage} alt="profile picture" className="profilePicture" />
                <div className="profileInfo">
                    <p className="profileBio">Lorem Ipsum</p>
                    <p className="profileDetails">200 points</p>
                    <img src={leafProfileBio} alt="Leaf containing profile-bio" className="profileBioImg" />
                    <img src={leafProfileDetails} alt="Leaf containing profile-details" className="profileDetailsImg" />
                </div>
            </article>
            <article className="profilePosts">
                <img src={postImage} alt="post" />
                <img src={postImage} alt="post" />
                <img src={postImage} alt="post" />
                <img src={postImage} alt="post" />
            </article>
        </section>
    )
}

export default Profile