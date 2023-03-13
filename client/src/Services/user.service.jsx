import http from "../http-common";

  const getAll = () => {
    return http.get("/users");
  }

  const get = (id) =>  {
    return http.get(`/users/${id}`);
  }

  const signUp = (data) =>  {

    console.log("todo loco")
    console.log(data)

    let form = new FormData();
    form.append('username', (data.username));
    form.append('password',(data.password));
    form.append('email', data.email);
    form.append('birthdate', data.birthdate);
    form.append('image', data.image);


    var config = {
        method: 'post',
        url: 'http://'+ window.location.hostname +':8080/users',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    };

    return axios(config);
  }
  
  const logIn = (data) =>  {

    console.log("todo loco")
    console.log(data)

    let form = new FormData();
    form.append('username', (data.username));
    form.append('password',(data.password));

    var config = {
        method: 'post',
        url: 'http://'+ window.location.hostname +':8080/users/signin',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    };

    return axios(config);
  }

  const update = (id, data) => {
    console.log("todo loco")
    console.log(data)

    let form = new FormData();
    form.append('username', (data.username));
    form.append('password',(data.password));
    form.append('email', data.email);
    form.append('birthdate', data.birthdate);
    form.append('image', data.image);


    var config = {
        method: 'put',
        url: `http://`+ window.location.hostname +`:8080/users/${id}`,
        headers: {
          'Authorization': sessionStorage.getItem("token"),
            'Content-Type': 'multipart/form-data'
        },
        data: form
    };

    return axios(config);
  }

  const deleteOne = (id) => {
    return http.delete(`/users/${id}`);
  }

  const deleteAll = () => {
    return http.delete(`/users`);
  }
  
  const UserService = {
    getAll,
    get,
    signUp,
    logIn,
    update,
    deleteOne,
    deleteAll,

  }

export default UserService();