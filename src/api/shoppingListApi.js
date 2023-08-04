import axios from "axios"

const shoppingListApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export default shoppingListApi