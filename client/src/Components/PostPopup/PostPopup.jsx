import React, { useState } from 'react'
import "./PostPopup.scss"

function PostPopup() {
    const initialPostState = {
      id: null,
      username: "",
      email: "",
      image: "",
      password: "",
      birthdate: undefined,
    };

    const [post,setPost] = useState([])

    

  return (
    <div id="myModal" class="modal">

  <div class="modal-content">
    <form >
       
        <select name="location" id="">
            <option value="Las palmas">las palmas</option>
            <option value="Rico">rico</option>
        </select>
        <input type="file" name="image" id="image" />
        <input type="hidden" name='userId' value={sessionStorage.getItem('userId')} />
        <input type="hidden" name='categoryId' value={sessionStorage.getItem('categoryId')} />
        <input type="hidden" name='categoryitemId' value={sessionStorage.getItem('categoryitemId')} />
        <button type="submit">Post</button>
    </form>
    </div>
  </div>
  )
}

export default PostPopup