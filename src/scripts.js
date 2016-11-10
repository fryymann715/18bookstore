import axios from 'axios'

const getBooks = () => {
  return axios.get('https://localhost:3001/books')
}
//
// const helpers = {
//   getGithubInfo: function(username){
//     return axios.all([getRepos(username), getUserInfo(username)])
//       .then(function(arr){
//         return {
//           repos: arr[0].data,
//           bio: arr[1].data
//         }
//       })
//   }
// }

module.exports = getBooks;
