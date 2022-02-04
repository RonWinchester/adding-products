import { getResponseData, apiUrl } from "../../constants/constants"

export function getProduct() {
    return fetch(`${apiUrl}`, {
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    }).then((res)=>{
        return getResponseData(res)
    })
}