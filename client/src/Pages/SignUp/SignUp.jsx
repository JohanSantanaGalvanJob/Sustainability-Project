import React from 'react'
import UserService from '../../Services/user.service';
import { useState } from 'react';
import './SignUp.scss'
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {

  let navigate = useNavigate()

  const initialUserState = {
    id: null,
    username: "",
    email: "",
    image: "",
    password: "",
    birthdate: undefined,
  };

  const [imgSrc, setImgSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg");
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleInputFileChange = event => {

    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      console.log("holaaaaaaaaaaa", reader.result)
      setImgSrc(reader.result);
    };

    console.log(url) // Would see a path?

    setUser({ ...user, image: file });
  };

  const onSubmit = (event) => {

    event.preventDefault();

    const params = {
      image: event.target.image.files[0],
      username: event.target.username?.value,
      email: event.target.email?.value,
      password: event.target.password?.value,
      birthdate: event.target.birthdate?.value
    }

    UserService.signUp(params).then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.data.access_token);
      sessionStorage.setItem('token',response.data.access_token)
      sessionStorage.setItem('userId', response.data.user.id)
      if (response.data.access_token) {
        navigate("/newsfeed")
        console.log(sessionStorage.getItem("token"));
       }
    }).catch(e => {
      console.log(e);
    });

  }

  return (
    <section className='sign-up-container'>
      <h1>Sign up!</h1>
      <h2>Please enter your details.</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor='image'>Image</label>
          <input type='file' name='image' required onSubmit={handleInputFileChange}></input>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' pattern="^[a-zA-Z0-9_]{6,}$" title="The username must contain at least 6 characters and no special ones" required onSubmit={handleInputChange} placeholder='Please enter your username'></input>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required onSubmit={handleInputChange} placeholder='Please enter your email'></input>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" 
       title="The password must contain at least 8 characters, include numbers, capital letters and lower letters" onSubmit={handleInputChange} placeholder='Please enter your password'></input>
          <label htmlFor='birthdate'>Birth Date</label>
          <input type='date' name='birthdate' required onSubmit={handleInputChange} placeholder='Please enter your birth date'></input>
          
          <button type='submit' className='submit-btn'>Sign Up!</button>
          
        </form>
    </section>
  )
}

export default SignUp