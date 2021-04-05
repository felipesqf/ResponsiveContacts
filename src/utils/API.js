import axios from "axios";
//get users from the randomusers api
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts: function() {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
      params: {
        dataType: 'json'
    }
  })
  }
}