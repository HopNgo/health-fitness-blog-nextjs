import { axiosClient } from "./axiosClient";

export const blogApi = {
  getPostListPerPage: (page: number, limit: number) => {
    return axiosClient.get(`/blog?_limit=${limit}&_page=${page}`);
  },
  getAllPostList: () => {
    return axiosClient.get("/blog");
  },
  deletePost: (id: string) => {
    return axiosClient.delete(`/blog/update/${id}`);
  },
};
