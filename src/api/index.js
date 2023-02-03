
import axios from 'axios'

let baseUrl = "http://localhost:3000/api"
const api={
    getBanner(){
        return axios.get(`${baseUrl}/banner`)
    },
    getHotHouseList(){
        return axios.get(`${baseUrl}/hotHouse`)
    }
}
export default api