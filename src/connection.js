import axios from 'axios';
export default axios.create(
    {
        baseURL:'https://safar-project-default-rtdb.asia-southeast1.firebasedatabase.app/'
    }
    
)