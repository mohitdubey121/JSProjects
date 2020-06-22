import axios from 'axios'

const instances = axios.create({
   baseURL :'https://react-my-burger-95b42.firebaseio.com/'
})

export default instances