// Configuración para el inicio de sesión.
const LOGIN_URL = "http://dev-digipay.ddns.net:8090/api-echo/v1/users/login"
const LOGIN_INIT_CONFIG = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify( {
        "email": "jsanchez@digipayve.com",
        "password": "12345678"
    } )
}

// Configuración para la información utilizada en la página.
const DATA_URL = "http://dev-digipay.ddns.net:8090/api-echo/v1/resumen/home"
const DATA_INIT_CONFIG = {
    method: "GET",
    headers: { "api-key": null }
}

export async function GET( request ) {
    try {
        const login_response = await fetch( LOGIN_URL, LOGIN_INIT_CONFIG )
        const login_json = await login_response.json()
        const API_KEY = login_json.data.user.apiKey
        DATA_INIT_CONFIG.headers["api-key"] = API_KEY

        const data_response = await fetch( DATA_URL, DATA_INIT_CONFIG )
        const data_json = await data_response.json()
        return data_json
    } catch (error) {
        console.log( error )
    }
}
