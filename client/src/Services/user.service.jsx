import http from "../http-common";

const  UserService  = () => {

  const getAll = () => {
    return http.get("/users");
  }

  const get = (id) =>  {
    return http.get(`/users/${id}`);
  }

  const create = (data) =>  {
    return http.post("/users", data);
  }

  const update = (id, data) => {
    return http.put(`/users/${id}`, data);
  }

  const deleteOne = (id) => {
    return http.delete(`/users/${id}`);
  }

  const deleteAll = () => {
    return http.delete(`/users`);
  }

  const findByTitle = (title) => {
    return http.get(`/users?title=${title}`);
  }
}

export default UserService();