const dev = process.env.NODE_ENV !== 'production'

export const config = {
  proxy: process.env.http_proxy,
}

//!!! cannont use nodejs in client
export const serverApi = dev ? 'http://localhost:305000000' : process.env.NEXT_PUBLIC_SERVER_API_URL
export const target = 'https://www.emag.ro/'


// export const SERVER_API_BASE_URL = BASE_URL