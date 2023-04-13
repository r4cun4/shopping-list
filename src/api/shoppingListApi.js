import axios from "axios"

const shoppingListApi = axios.create({
    baseURL: 'https://shopping-list-f8ce8-default-rtdb.firebaseio.com'
})

export default shoppingListApi