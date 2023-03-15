import React from 'react'
import "./PostPopup.scss"
function PostPopup() {
    sessionStorage.setItem('categoryId',2)
    sessionStorage.setItem('categoryitemId',3)

    

  return (
    <div id="myModal" class="modal">

  <div class="modal-content">
    <form action="http://localhost:8080/posts" method="post">
       
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