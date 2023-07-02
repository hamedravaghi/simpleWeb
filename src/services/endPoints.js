const baseUrl = "http://localhost:5003"
const headers = { 'Content-Type': 'application/json' }


export const checkUserApi = (value) => {
     return fetch(`${baseUrl}/user/check-user`, { body: JSON.stringify(value), method: "POST", headers })

}


export const verifyUserApi = (value) => {
     return fetch(`${baseUrl}/user/verify`, { body: JSON.stringify(value), method: "POST", headers })

}


export const checkNickNameApi = async (value) => {
     const response = await fetch(`${baseUrl}/shop/check-nick-name`, { body: JSON.stringify(value), method: "POST", headers })
     const result = await response.json()
     return { status: response.status, statusText: response.statusText, result }
}

export const checkShopApi = async (value) => {
     const response = await fetch(`${baseUrl}/shop/check-shop`, { body: JSON.stringify(value), method: "POST", headers })
     const result = await response.json()

     return { status: response.status, statusText: response.statusText, result }
}



export const verifyShopApi = async (value) => {
     const response = await fetch(`${baseUrl}/shop/verify`, { body: JSON.stringify(value), method: "POST", headers })
     const result = await response.json()

     return { status: response.status, statusText: response.statusText, result }
}