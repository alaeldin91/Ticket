import api from './api_auth'
export default {

    loginCustomer(user) {
        return api().post("api/auth/loginCustomer", user).then(response => {
            if (response.status === 200) {
                this.setTokenCustomer(response.dat);
            }
            return response.data
        })
    },
    setTokenCustomer(user) {
        localStorage.setItem('ticket_token', JSON.stringify(user))

    },
    isLoginCustomer() {
        const token = localStorage.getItem('ticket_token');
        return token != null
    },
    getAccessToken() {
        const token = localStorage.getItem('ticket_token');
        if (!token) {
             return null;
        }
        else{
            return token.access_token;
        }
    },
}