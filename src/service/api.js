import axios from 'axios'
export default {
  getAllPosts() {
    return axios.get('//localhost:3030/api')
  }
}