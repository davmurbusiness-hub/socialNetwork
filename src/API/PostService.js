import axios from "axios";

export default class PostService {
  static async getAllPosts(limit = 10, page = 1) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: limit,
          _page: page
        }
      });
      let newPosts = []
      for (const post of response.data) {
        newPosts.push(post);
      }
      return [newPosts, response];
    } catch (e) {
      console.error(e);
    }

  }

  static async getById(id) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
    return response;
  }


  static async getCommentsById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}