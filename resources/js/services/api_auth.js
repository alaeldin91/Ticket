import axios from "axios";
import store from "./store.js"
import auth from "./auth_service"
export default ()=> {
    return axios.create({
        apiURL:store.state.apiURL,
        serverPath: store.state.serverPath,
        headers:{
            authorization:'Bearer ' + auth.getAccessToken()
        }
    })
}