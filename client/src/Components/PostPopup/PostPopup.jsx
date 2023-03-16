import React, { useEffect, useState } from 'react'
import CategoryService from '../../Services/category.service';
import PostService from '../../Services/post.service';
import "./PostPopup.scss"

function PostPopup() {
  const initialPostState = {
    id: null,
    location: "",
    image: "",
    userId: sessionStorage.getItem('userId'),
    categoryId: null,
    categoryitemId: null,
  };

  const [imgSrc, setImgSrc] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg");
  const [post, setPost] = useState(initialPostState);
  const [categories, setCategories] = useState([]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
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

    setPost({ ...post, image: file });
  }

  const onSubmit = (event) => {

    event.preventDefault();

    const params = {
      image: event.target.image.files[0],
      location: event.target.location?.value,
      categoryId: event.target.categoryId?.value,
      categoryitemId: event.target.categoryitemId?.value,
    }
    // let hasError = false
    // let strongPassword = new RegExp('^[a-zA-Z0-9_]{6,}$')
    // console.log(strongPassword)
    // if(!strongPassword.test(params.password)){
    //   setWrongPassword(true)
    //   console.log("hello world")
    //   hasError = true
    // }

    // if(!params.image){
    //   setNoImage(true)
    //   hasError = true
    // }

    // let testUsername = new RegExp('^[a-zA-Z0-9_]{6,}$')
    // if(!testUsername.test(params.username)){
    //   setWrongUsername(true)
    //   hasError = true
    // }
    // let checkEmail = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')
    // if(!checkEmail.test(params.email)){
    //   setWrongEmail(true)
    //   hasError = true
    // }
    // if(!params.birthdate){
    //   setNoBirthday(true)
    //   hasError = true
    // }
    // if (hasError){
    //   return
    // }

    PostService.create(params).then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.data.access_token);
    }).catch(e => {
      console.log(e);
    });
  }

  const getCategories = () => {
    CategoryService.getAll().then((response) => {
      console.log(response.data);
      setCategories(response.data);
    }).catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div id="myModal" class="modal">

      <div class="modal-content">
        <form onSubmit={onSubmit} >

          <select className="form-control" name="categoryId" type="text" onChange={handleInputChange} required>
            <option value="2" selected>Type a Category</option>
            {categories &&
              categories.map((category, index) => (
                <option value={category.id} key={index}>{category.name}</option>
              ))
            }
          </select>

          <select className="form-control" name="categoryitemId" type="text" onChange={handleInputChange} required>
            <option value="2" selected>Type a Category Item</option>
            {categories &&
              categories.map((category, index) => (
                <option value={category.id} key={index}>{category.name}</option>
              ))
            }
          </select>

          <input type="file" name="image" id="image" onSubmit={handleInputFileChange} />
          <input type="text" name="location" id="location" onSubmit={handleInputChange} />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  )
}

export default PostPopup