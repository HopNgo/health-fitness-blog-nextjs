import { axiosClient } from "./axiosClient";

export const blogApi = {
  getPostListPerPage: (page: number, limit: number) => {
    return axiosClient.get(`/blog?_limit=${limit}&_page=${page}`);
  },
  getTwoRecentPosts: () => {
    return axiosClient.get("/blog?_limit=2&_page=1");
  },
  getAllPostList: () => {
    return axiosClient.get("/blog");
  },
  getPostDetail: (slug: string) => {
    return axiosClient.get(`/blog/${slug}`);
  },
  deletePost: (id: string) => {
    return axiosClient.delete(`/blog/update/${id}`);
  },
};
