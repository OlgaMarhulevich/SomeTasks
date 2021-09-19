import axios from "axios";

export const post = (isChecked: boolean) => {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: isChecked})
}