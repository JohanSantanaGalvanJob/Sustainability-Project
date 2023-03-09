import http from "../http-common";

const  PostService  = () => {

  const getAll = () => {
    return http.get("/posts");
  }

  const get = (id) =>  {
    return http.get(`/posts/${id}`);
  }

  const create = (data) =>  {
    return http.post("/posts", data);
  }

  const update = (id, data) => {
    return http.put(`/posts/${id}`, data);
  }

  const deleteOne = (id) => {
    return http.delete(`/posts/${id}`);
  }

  const deleteAll = () => {
    return http.delete(`/posts`);
  }

  const findByTitle = (title) => {
    return http.get(`/posts?title=${title}`);
  }
}

export default PostService();