import axios from "axios"
import * as config from "../constanst/config"

const callApi = (endpoint, method="GET", data = null)=>{
    return axios({
        method: method,
        url:`${config.API_URL}/${endpoint}`,
        data: data
    })
}
export default callApi;