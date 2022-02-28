import axios from "./API/axios.js";

export function createItem(inputData) {
    const {name, category, availability} = inputData;

    return axios({
        method: "POST",
        url: "https://api-nginx-lms.accelego.id/api/v1/hiring",
        data: {
            name,
            category,
            availability
        }
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(err);
    })


}