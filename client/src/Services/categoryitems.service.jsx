import http from "../http-common";

const  CategoryItemsService  = () => {

  const getAll = () => {
    return http.get("/categoryitems");
  }

  const get = (id) =>  {
    return http.get(`/categoryitems/${id}`);
  }

  const create = (data) =>  {
    return http.post("/categoryitems", data);
  }

  const update = (id, data) => {
    return http.put(`/categoryitems/${id}`, data);
  }

  const deleteOne = (id) => {
    return http.delete(`/categoryitems/${id}`);
  }

  const deleteAll = () => {
    return http.delete(`/categoryitems`);
  }

  const findByTitle = (title) => {
    return http.get(`/categoryitems?title=${title}`);
  }
}

export default CategoryItemsService();