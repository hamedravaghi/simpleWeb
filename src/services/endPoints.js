const baseUrl = "http://localhost:5003"
const headers = { 'Content-Type': 'application/json' }


export const checkUserApi = (value) => {
     return fetch(`${baseUrl}/user/check-user`, { body: JSON.stringify(value), method: "POST", headers })

}


export const verifyUserApi = (value) => {
     return fetch(`${baseUrl}/user/verify`, { body: JSON.stringify(value), method: "POST", headers })

}

export const checkShopApi = (value) => {
     return fetch(`${baseUrl}/shop/check-shop`, { body: JSON.stringify(value), method: "POST", headers })

}





export const confirmNameShop = (value) => {
     return fetch(`${baseUrl}/shop/confirm-shop`, { body: JSON.stringify(value), method: "PUT", headers })
}






export const verifyShopApi = (value) => {
     return fetch(`${baseUrl}/shop/verify-shop`, { body: JSON.stringify(value), method: "POST", headers })


}